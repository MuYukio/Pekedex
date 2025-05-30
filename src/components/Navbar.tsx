import React from 'react';
import {
  NavbarContainer,
  Logo,
  Title,
  SearchContainer,
  SearchInput,
  SearchButton,
  ThemeToggleButton,
  ThemeIcon
} from './Navbar.styles';
import { useTheme } from 'styled-components';



interface NavbarProps {
  search: string;
  setSearch: (value: string) => void;
  handleSearch: () => void;
  toggleTheme: () => void;
  darkMode: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ search, setSearch, handleSearch, toggleTheme, darkMode }) => {
  const theme = useTheme();
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
        />
        <SearchButton onClick={handleSearch}>Buscar</SearchButton>
        
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
