import React from 'react';
import { NavbarContainer, Logo, Title, SearchContainer, SearchInput, SearchButton } from './navbar.styles';

interface NavbarProps {
  search: string;
  setSearch: (value: string) => void;
  handleSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ search, setSearch, handleSearch }) => {
  return (
    <NavbarContainer>
      <Logo src="/src/image/pokebola.png" alt="Logo" />
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
    </NavbarContainer>
  );
};
