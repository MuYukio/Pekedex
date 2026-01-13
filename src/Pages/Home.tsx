import { useEffect, useState } from "react";
import { Container, Grid, LoadMoreButton, ContentWrapper } from "./Home.styles";
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
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    loadPokemons(0);
  }, []);

  const loadPokemons = async (offsetValue: number) => {
    try {
      setLoading(true);
      const list = await fetchPokeList(limit, offsetValue);
      const details = await Promise.all(list.map(item => fetchPokeListItem(item.name)));

      setPokes(prev => {
        const existingNames = new Set(prev.map(p => p.name));
        const newPokes = details.filter(p => !existingNames.has(p.name));
        return [...prev, ...newPokes];
      });
    } catch (err) {
      console.error("Erro ao carregar Pokémon:", err);
    } finally {
      setLoading(false);
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
      setLoading(true);
      const result = await fetchPoke(query);
      
      const pokeList: PokeList = {
        id: result.id,
        name: result.name,
        image: result.image,
        types: result.types
      };
      
      setPokes([pokeList]);
      setOffset(0);
    } catch (err) {
      console.error("Erro na busca:", err);
      setPokes([]);
    } finally {
      setLoading(false);
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
        <ContentWrapper>
          <Grid>
            {pokes.map((poke) => (
              <PokeCard key={`${poke.id}-${poke.name}`} poke={poke} />
            ))}
          </Grid>
          
          {!loading && pokes.length > 0 && (
            <LoadMoreButton onClick={handleLoadMore}>
              Carregar mais
            </LoadMoreButton>
          )}
          
          {loading && (
            <div style={{ 
              textAlign: 'center', 
              padding: '40px', 
              color: '#fff',
              position: 'relative',
              zIndex: 1 
            }}>
              Carregando Pokémon...
            </div>
          )}
          
          {!loading && pokes.length === 0 && search && (
            <div style={{ 
              textAlign: 'center', 
              padding: '40px', 
              color: '#fff',
              position: 'relative',
              zIndex: 1 
            }}>
              Nenhum Pokémon encontrado.
            </div>
          )}
        </ContentWrapper>
      </Container>
    </>
  );
}