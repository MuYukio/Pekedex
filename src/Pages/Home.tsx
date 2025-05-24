import { useEffect, useState } from "react";
import { Container, Grid, LoadMoreButton } from "./Home.styles";
import type { Poke } from "../types/Poke";
import { fetchPoke, fetchPokeList } from "../services/PokeApi";
import { PokeCard } from "../components/PokeCard";
import type { PokeListItem } from "../types/PokeListItem";
import { Navbar } from "../components/Navbar";

export function Home() {
  const [pokes, setPokes] = useState<Poke[]>([]);
  const [search, setSearch] = useState('');
  const [offset, setOffset] = useState(0);
  const limit = 21;

  useEffect(() => {
    loadPokemons(0);
  }, []);

  const loadPokemons = async (offsetValue: number) => {
    try {
      const list: PokeListItem[] = await fetchPokeList(limit, offsetValue);
      const details = await Promise.all(
        list.map((item) => fetchPoke(item.name))
      );

      setPokes((prevPokes) => {
        const existingNames = new Set(prevPokes.map((p) => p.name));
        const newPokes = details.filter((p) => !existingNames.has(p.name));
        return [...prevPokes, ...newPokes];
      });
    } catch (err) {
      console.error("Erro ao carregar Pokémon:", err);
    }
  };

  const handleLoadMore = () => {
    const newOffset = offset + limit;
    setOffset(newOffset);
    loadPokemons(newOffset);
  };

  const handleSearch = async () => {
    if (!search.trim()) {
      setPokes([]);
      setOffset(0);
      loadPokemons(0);
      return;
    }
    try {
      setPokes([]);
      const result: Poke = await fetchPoke(search.toLowerCase());
      setPokes([result]);
      setOffset(0);
    } catch (err) {
      console.error("Erro na busca:", err);
      setPokes([]);
    }
  };

  return (
    <>
      <Navbar search={search} setSearch={setSearch} handleSearch={handleSearch} />
      <Container>
        <Grid>
          {pokes.map((poke) => (
            <PokeCard key={poke.name} poke={poke} />
          ))}
        </Grid>
        <LoadMoreButton onClick={handleLoadMore}>Carregar mais</LoadMoreButton>
      </Container>
    </>
  );
}
