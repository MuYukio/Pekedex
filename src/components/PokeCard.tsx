import type { Poke } from "../types/Poke";
import { Card, Title, Image, Info, StyledLink } from "./PokeCard.styles";

interface Props {
  poke: Poke;
}

export function PokeCard({ poke }: Props) {
  return (
    <StyledLink to={`/poke/${poke.name}`}>
      <Card>
        <Image src={poke.front_default} alt={poke.name} />
        <Title>{poke.name}</Title>
        <Info>{poke.description}</Info>
      </Card>
    </StyledLink>
  );
}
