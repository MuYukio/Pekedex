import { useEffect, useState } from "react";
import { Container, Grid, LoadMoreButton } from "./Home.styles";
import { fetchPoke, fetchPokeList, fetchPokeListItem } from "../services/PokeApi";
import { PokeCard } from "../components/PokeCard";
import { Navbar } from "../components/Navbar";
import type { PokeList } from "../types/types";

interface HomeProps {
  darkMode: boolean;
  toggleTheme: () => void;
}


export function Home({ darkMode, toggleTheme }: HomeProps) {

  const [pokes, setPokes] = useState<PokeList[]>([]);
  const [offset, setOffset] = useState(0);
  const limit = 21;

  const [search, setSearch] = useState("");
 
  
  useEffect(() => {
    loadPokemons(0);
  }, []);

   const loadPokemons = async (offsetValue: number) => {
    try {
      const list = await fetchPokeList(limit, offsetValue);
      const details = await Promise.all(list.map(item => fetchPokeListItem(item.name)));

      setPokes(prev => {
        const existingNames = new Set(prev.map(p => p.name));
        const newPokes = details.filter(p => !existingNames.has(p.name));
        return [...prev, ...newPokes];
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleLoadMore = () => {
    const newOffset = offset + limit;
    setOffset(newOffset);
    loadPokemons(newOffset);
  };

  const handleSearch = async (searchTerm?: string) => {
    const query = searchTerm ?? search;
    if (!query.trim()) {
      setPokes([]);
      setOffset(0);
      loadPokemons(0);
      return;
    }

    try {
      const result = await fetchPoke(query);
      setPokes([result]);

      setOffset(0);
    } catch (err) {
      console.error("Erro na busca:", err);
      setPokes([]);
    }
  };




  return (
    <>
      <Navbar
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />
      
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
