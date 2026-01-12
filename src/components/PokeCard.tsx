import type { PokeList } from "../types/PokeList";
import { Card, Title, Image, StyledLink, PokeNumber } from "./PokeCard.styles";

interface PokeCardProps {
  poke: PokeList;
}

export function PokeCard({ poke }: PokeCardProps) {
  return (
    <StyledLink to={`/poke/${poke.name}`}>
      <Card>
        <Image src={poke.image} alt={poke.name} />
        <Title>
          <PokeNumber>#{poke.id}</PokeNumber>
          {poke.name}
        </Title>
        
      </Card>
    </StyledLink>
  );
}