import React, { useEffect, useState, useRef, useCallback } from 'react';
import {
  NavbarContainer,
  LogoContainer,
  Logo,
  Title,
  SearchContainer,
  SearchInput,
  SearchButton,
  ThemeToggleButton,
  ThemeIcon,
  SuggestionsList,
  SuggestionItem,
  LoadingIndicator,
  NoResults
} from './Navbar.styles';
import { useTheme } from 'styled-components';
import { fetchPokeList } from '../services/PokeApi';
import type { PokeListItem } from '../types/types';
import { FaSearch } from 'react-icons/fa';

interface NavbarProps {
  search: string;
  setSearch: (value: string) => void;
  handleSearch: (name?: string) => void;
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
  const [activeIndex, setActiveIndex] = useState(-1);
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionsRef = useRef<HTMLUListElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && 
          !searchContainerRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (search.trim() && showSuggestions) {
        fetchSuggestions();
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [search, showSuggestions]);

  const fetchSuggestions = useCallback(async () => {
    if (!search.trim()) {
      setSuggestions([]);
      return;
    }

    setLoadingSuggestions(true);
    try {
      const allPokemons = await fetchPokeList(1000, 0);
      const filtered = allPokemons.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 8));
    } catch (err) {
      console.error('Erro ao buscar sugestões:', err);
      setSuggestions([]);
    } finally {
      setLoadingSuggestions(false);
    }
  }, [search]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions || suggestions.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActiveIndex(prev => (prev + 1) % suggestions.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex(prev => (prev - 1 + suggestions.length) % suggestions.length);
        break;
      case 'Enter':
        e.preventDefault();
        if (activeIndex >= 0) {
          selectSuggestion(suggestions[activeIndex].name);
        } else {
          handleSearch(search);
          setShowSuggestions(false);
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        setActiveIndex(-1);
        break;
    }
  };

  const selectSuggestion = (name: string) => {
    setSearch(name);
    handleSearch(name);
    setShowSuggestions(false);
    setActiveIndex(-1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setShowSuggestions(true);
    setActiveIndex(-1);
  };

  const handleSearchClick = () => {
    handleSearch(search);
    setShowSuggestions(false);
  };

  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo src={theme.logo} alt="Pokébola" />
        <Title>Pokédex</Title>
      </LogoContainer>

      <SearchContainer ref={searchContainerRef}>
        <SearchInput
          type="text"
          placeholder="Buscar Pokémon pelo nome..."
          value={search}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setShowSuggestions(true)}
        />

        <SearchButton onClick={handleSearchClick}>
          <FaSearch /> Buscar
        </SearchButton>

        {showSuggestions && search.trim() && (
          <SuggestionsList ref={suggestionsRef}>
            {loadingSuggestions ? (
              <LoadingIndicator>Carregando...</LoadingIndicator>
            ) : suggestions.length > 0 ? (
              suggestions.map((pokemon, index) => (
                <SuggestionItem
                  key={pokemon.name}
                  onClick={() => selectSuggestion(pokemon.name)}
                  active={index === activeIndex}
                >
                  {pokemon.name}
                </SuggestionItem>
              ))
            ) : (
              <NoResults>Nenhum Pokémon encontrado</NoResults>
            )}
          </SuggestionsList>
        )}
      </SearchContainer>

      <ThemeToggleButton onClick={toggleTheme} title={darkMode ? "Modo Claro" : "Modo Escuro"}>
        <ThemeIcon
          src={darkMode ? "/src/image/umbreon.png" : "/src/image/espeon.png"}
          alt={darkMode ? "Tema claro" : "Tema escuro"}
        />
      </ThemeToggleButton>
    </NavbarContainer>
  );
};