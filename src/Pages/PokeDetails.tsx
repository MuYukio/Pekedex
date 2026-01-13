import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Alterado: adicionado useNavigate
import type { PokeDetails, PokemonStat } from "../types/types";
import { fetchPoke } from "../services/PokeApi";
import {
  Container,
  Info,
  Title,
  Image,
  ContainerImage,
  BackButton,
  Number,
  DescriptionTitle,
  ImageWrapper,
  StatContainer,
  StatName,
  StatBarBackground,
  StatBarFill,
  StatValue,
  TypeBadge,
  TypesContainer,
  InfoCard,
  InfoGrid,
  InfoItem,
  ShinyToggleButton,
  EvolutionChain,
  EvolutionItem, // Adicionado novo componente
  LoadingSpinner,
  ErrorMessage,
  CurrentFormLabel,
  ImageContainer
} from "./PokeDetails.styled";
import { FaArrowLeft, FaStar, FaWeight, FaRulerVertical, FaExchangeAlt } from 'react-icons/fa';
import { getStatColor, normalizeStat } from "../utils/statsNormalizer";

export function PokeDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate(); // Adicionado hook de navegação
  const [poke, setPoke] = useState<PokeDetails | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [isShiny, setIsShiny] = useState(false);

  useEffect(() => {
    async function loadPokemon() {
      try {
        setLoading(true);
        const result = await fetchPoke(id!.toLowerCase());
        setPoke(result);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Não foi possível carregar o Pokémon.");
      } finally {
        setLoading(false);
      }
    }

    if (id) loadPokemon();
  }, [id]);

  const toggleShiny = () => {
    setIsShiny(!isShiny);
  };

  // Função para navegar para outro Pokémon
  const handleEvolutionClick = (evolutionId: number) => {
    navigate(`/pokemon/${evolutionId}`);
  };

  if (loading) return <LoadingSpinner>Carregando...</LoadingSpinner>;
  if (error) return <ErrorMessage>{error}</ErrorMessage>;
  if (!poke) return null;

  const currentImage = isShiny ? poke.shiny : poke.image;
  const currentFormLabel = isShiny ? "Forma Shiny" : "Forma Normal";

  return (
    <Container>
      <BackButton to="/">
        <FaArrowLeft /> Voltar para Pokédex
      </BackButton>

      <InfoCard>
        {/* Header com número e nome */}
        <Title>
          <Number>#{poke.id.toString().padStart(3, '0')}</Number>
          {poke.name}
        </Title>

        {/* Tipos do Pokémon */}
        <TypesContainer>
          {poke.types?.map((type) => (
            <TypeBadge key={type} type={type}>
              {type}
            </TypeBadge>
          ))}
        </TypesContainer>

        {/* Container da imagem única */}
        <ContainerImage>
          <ImageContainer>
            <ImageWrapper>
              <Image
                src={currentImage}
                alt={isShiny ? `${poke.name} shiny` : poke.name}
              />
              <CurrentFormLabel>
                {isShiny && <FaStar style={{ marginRight: '8px' }} />}
                {currentFormLabel}
              </CurrentFormLabel>
            </ImageWrapper>

            <ShinyToggleButton
              onClick={toggleShiny}
              isActive={isShiny}
            >
              <FaExchangeAlt />
              {isShiny ? "Ver Normal" : "Ver Shiny"}
              {isShiny && <FaStar style={{ marginLeft: '8px' }} />}
            </ShinyToggleButton>
          </ImageContainer>
        </ContainerImage>

        {/* Informações básicas */}
        <InfoGrid>
          <InfoItem>
            <FaWeight /> Peso: {poke.weight / 10} kg
          </InfoItem>
          <InfoItem>
            <FaRulerVertical /> Altura: {poke.height / 10} m
          </InfoItem>
          <InfoItem>
            💎 Habilidades: {poke.abilities?.join(', ')}
          </InfoItem>
        </InfoGrid>

        {/* Descrição */}
        <DescriptionTitle>Estatísticas</DescriptionTitle>
        <div>
          {poke.stats.map((stat: PokemonStat) => {
            // Normaliza para 255
            const normalizedValue = normalizeStat(stat.value);

            return (
              <StatContainer key={stat.name}>
                <StatName>
                  <span>{stat.name}</span>
                  <StatValue>{stat.value}</StatValue>
                </StatName>
                <StatBarBackground>
                  {/* Passe apenas o valor normalizado */}
                  <StatBarFill value={normalizedValue} />
                </StatBarBackground>
              </StatContainer>
            );
          })}
        </div>
        {/* Cadeia de evolução (se disponível) */}
        {poke.evolutions && poke.evolutions.length > 0 && (
          <>
            <DescriptionTitle>Cadeia de Evolução</DescriptionTitle>
            <EvolutionChain>
              {poke.evolutions.map((evo) => (
                <EvolutionItem
                  key={evo.id}
                  onClick={() => handleEvolutionClick(evo.id)}
                >
                  <img src={evo.image} alt={evo.name} />
                  <span>{evo.name}</span>
                </EvolutionItem>
              ))}
            </EvolutionChain>
          </>
        )}
      </InfoCard>
    </Container>
  );
}