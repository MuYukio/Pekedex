import React, { useEffect, useState, useRef } from 'react';
import {
  NavbarContainer,
  Logo,
  Title,
  SearchContainer,
  SearchInput,
  SearchButton,
  ThemeToggleButton,
  ThemeIcon,
  SuggestionsList,
  SuggestionItem
} from './Navbar.styles';
import { useTheme } from 'styled-components';
import { fetchPokeList } from '../services/PokeApi';
import type { PokeListItem } from '../types/PokeListItem';

interface NavbarProps {
  search: string;
  setSearch: (value: string) => void;
  handleSearch: (name?: string) => void; // busca ao selecionar
  toggleTheme: () => void;
  darkMode: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  search,
  setSearch,
  handleSearch,
  toggleTheme,
  darkMode
}) => {
  const theme = useTheme();
  const [suggestions, setSuggestions] = useState<PokeListItem[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1); // índice ativo para setas
  const suggestionsRef = useRef<HTMLUListElement>(null);

  // Atualiza sugestões ao digitar
  useEffect(() => {
    if (!search.trim()) {
      setSuggestions([]);
      setActiveIndex(-1);
      return;
    }

    async function fetchSuggestions() {
      try {
        const allPokemons = await fetchPokeList(1000, 0); // pega todos os nomes
        const filtered = allPokemons.filter(p =>
          p.name.toLowerCase().includes(search.toLowerCase())
        );
        setSuggestions(filtered.slice(0, 5));
        setActiveIndex(-1);
      } catch (err) {
        console.error('Erro ao buscar sugestões:', err);
      }
    }

    fetchSuggestions();
  }, [search]);

  // Teclas: setas e Enter
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (suggestions.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(prev => (prev + 1) % suggestions.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(prev => (prev - 1 + suggestions.length) % suggestions.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (activeIndex >= 0) {
        // seleciona sugestão ativa
        selectSuggestion(suggestions[activeIndex].name);
      } else {
        handleSearch(search); // busca normal se não tiver selecionado
      }
    }
  };

  // Selecionar sugestão via click ou Enter
  const selectSuggestion = (name: string) => {
    setSearch(name);       // atualiza input
    handleSearch(name);    // realiza busca imediatamente
    setSuggestions([]);    // fecha lista
    setActiveIndex(-1);
  };

  return (
    <NavbarContainer>
      <Logo src={theme.logo} alt="Logo" />
      <Title>Pokédex</Title>

      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Buscar Pokémon"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        {suggestions.length > 0 && (
          <SuggestionsList ref={suggestionsRef}>
            {suggestions.map((p, index) => (
              <SuggestionItem
                key={p.name}
                onClick={() => selectSuggestion(p.name)}
                active={index === activeIndex}
              >
                {p.name}
              </SuggestionItem>
            ))}
          </SuggestionsList>
        )}

        <SearchButton onClick={() => handleSearch(search)}>Buscar</SearchButton>
      </SearchContainer>

      <ThemeToggleButton onClick={toggleTheme}>
        <ThemeIcon
          src={darkMode ? "/src/image/umbreon.png" : "/src/image/espeon.png"}
          alt={darkMode ? "Tema claro" : "Tema escuro"}
        />
      </ThemeToggleButton>
    </NavbarContainer>
  );
};
