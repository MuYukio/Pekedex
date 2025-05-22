
import { useEffect, useState } from "react";
import { Button, Container, Grid, Input, SearchBox, Title } from "./Home.styles";
import type { Poke } from "../types/Poke";
import { fetchPoke, fetchPokeList } from "../services/PokeApi";
import { PokeCard } from "../components/PokeCard";
import type { PokeListItem } from "../types/PokeListItem";
import { Link } from "react-router-dom";

export function Home() {

  const [pokes, setPokes] = useState<Poke[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function loadInitial() {
      try {
        
        const list: PokeListItem[] = await fetchPokeList();
        
        const details = await Promise.all(
          list.map((item) => fetchPoke(item.name))
        );
        setPokes(details);
      } catch (err) {
        console.error("Erro ao carregar lista inicial:", err);
      }
    }
    loadInitial();
  }, []);

 
  const handleSearch = async () => {
    if (!search.trim()) {
      
      return;
    }
    try {
      const result: Poke = await fetchPoke(search.toLowerCase());
      
      setPokes([result]);
    } catch (err) {
      console.error("Erro na busca:", err);
      setPokes([]); 
    }
  };
  return (
    <Container>
      <Title>Pokedéx</Title>
      <SearchBox>
        <Input
          type="text"
          placeholder="Buscar Pekemon"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button onClick={handleSearch}>Buscar</Button>
      </SearchBox>
      <Grid>
        {pokes.map((poke) => (
          <Link key={poke.name} to={`/pokemon/${poke.name}`}>
            <PokeCard poke={poke} />
          </Link>
        ))}
      </Grid>
    </Container>


  )
}

