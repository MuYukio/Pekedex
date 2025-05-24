import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import type { Poke } from "../types/Poke";
import { fetchPoke } from "../services/PokeApi";
import {
  Container,
  Info,
  Title,
  Image,
  ContainerImage,
  BackLink,
  Number,
  DescriptionTitle,
  ImageWrapper,
  ImageLabel
} from "./PokeDetails.styled";

export function PokeDetails() {
  const { id } = useParams<{ id: string }>();
  const [poke, setPoke] = useState<Poke | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("Parâmetro inválido.");
      return;
    }

    fetchPoke(id.toLowerCase())
      .then(setPoke)
      .catch((err) => {
        console.error("Erro ao buscar detalhes:", err);
        setError("Não foi possível carregar o Pokémon.");
      });
  }, [id]);

  if (error)
    return (
      <Container>
        <Link to="/">← Voltar</Link>
        <p>{error}</p>
      </Container>
    );
  if (!poke) return <p>Carregando…</p>;

  return (
    <Container>
      <BackLink href="/">← Voltar</BackLink>
      <ContainerImage>
        <ImageWrapper>
          <Image src={poke.front_default} alt={poke.name} />
          <ImageLabel>Forma Normal</ImageLabel>
        </ImageWrapper>
        <ImageWrapper>
          <Image src={poke.front_shiny} alt={`${poke.name} shiny`} />
          <ImageLabel>Forma Shiny</ImageLabel>
        </ImageWrapper>
      </ContainerImage>
      <Title>{poke.name}</Title>
      <Number>Número: #{poke.order}</Number>
      <DescriptionTitle>Descrição</DescriptionTitle>
      <Info>{poke.description}</Info>
    </Container>
  );
}
