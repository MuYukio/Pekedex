import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { PokeDetails, PokemonStat } from "../types/types";
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
  ImageLabel,
  StatContainer,
  StatName,
  StatBarBackground,
  StatBarFill
} from "./PokeDetails.styled";


export function PokeDetails() {
  const { id } = useParams<{ id: string }>();
  const [poke, setPoke] = useState<PokeDetails | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [sprite, setSprite] = useState<"normal" | "shiny">("normal");

 useEffect(() => {
  async function loadPokemon() {
    try {
      const result = await fetchPoke(id!.toLowerCase()); 
      setPoke(result);
    } catch (err) {
      console.error(err);
      setError("Não foi possível carregar o Pokémon.");
    }
  }

  if (id) loadPokemon(); 
}, [id]);

  if (error) return <p>{error}</p>;
  if (!poke) return <p>Carregando…</p>;

  const getImage = () => (sprite === "normal" ? poke.image : poke.shiny);

  return (
    <Container>
      <BackLink href="/">← Voltar</BackLink>

      <ContainerImage>
        <ImageWrapper onClick={() => setSprite("normal")}>
          <Image src={poke.image} alt={poke.name} />
          <ImageLabel>Forma Normal</ImageLabel>
        </ImageWrapper>

        <ImageWrapper onClick={() => setSprite("shiny")}>
          <Image src={poke.shiny} alt={`${poke.name} shiny`} />
          <ImageLabel>Forma Shiny</ImageLabel>
        </ImageWrapper>
      </ContainerImage>

      <Title>
        <Number>#{poke.id}</Number>
        {poke.name}
      </Title>

      <DescriptionTitle>Descrição</DescriptionTitle>
      <Info>{poke.description}</Info>

      <DescriptionTitle>Stats</DescriptionTitle>
      <div>
        {poke.stats.map((stat: PokemonStat) => (
          <StatContainer key={stat.name}>
            <StatName>{stat.name}</StatName>
            <StatBarBackground>
              <StatBarFill value={stat.value} />
            </StatBarBackground>
          </StatContainer>
        ))}
      </div>
    </Container>
  );
}
