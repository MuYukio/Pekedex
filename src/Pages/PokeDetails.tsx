import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import type { Poke } from "../types/Poke";
import { fetchPoke } from "../services/PokeApi";
import { Container, Info, Title, Image, ContainerImage } from "./PokeDetails.styled";

export function PokeDetails() {
  // aqui "id" vem da URL /pokemon/:id
  const { id } = useParams<{ id: string }>();
  const [poke, setPoke] = useState<Poke | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("Parâmetro inválido.");
      return;
    }
    // usa lowerCase para evitar 404 por case-sensitive
    fetchPoke(id.toLowerCase())
      .then(setPoke)
      .catch((err) => {
        console.error("Erro ao buscar detalhes:", err);
        setError("Não foi possível carregar o Pokémon.");
      });
  }, [id]);

  if (error) return (
    <Container>
      <Link to="/">← Voltar</Link>
      <p>{error}</p>
    </Container>
  );
  if (!poke) return <p>Carregando…</p>;

  return (
    <Container>
      <Link to="/">← Voltar</Link>
      <ContainerImage>
        <Image src={poke.front_default} alt={poke.name}/>
        <Image src={poke.front_shiny} alt={`${poke.name} shiny`}/>
      </ContainerImage>
      <Title>{poke.name}</Title>
      <a>Numero:#{poke.order}</a>
      <Info>{poke.description}</Info>
    </Container>
  );
}
