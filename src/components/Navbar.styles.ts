import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.navbarBackground};
  padding: 1rem 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  flex-wrap: wrap;
  gap: 1.5rem;
  border-radius: 12px; /* borda mais moderna */
`;

export const Logo = styled.img`
  height: 50px;
  margin-right: 1rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.color};
  margin: 0;
  flex: 1;
  font-weight: 700;
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex: 2;
  max-width: 400px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 999px; /* arredondado estilo moderno */
  border: 1px solid ${({ theme }) => theme.inputcolor};
  background-color: ${({ theme }) => theme.inputBackground};
  color: ${({ theme }) => theme.color};
  font-size: 1rem;
  transition: all 0.3s;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.primary}33; /* leve glow */
    border-color: ${({ theme }) => theme.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.inputcolor}AA;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.buttonColor};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.primary}CC;
  }
`;

export const ThemeToggleButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
`;

export const ThemeIcon = styled.img`
  width: 50px;
  height: 50px;
`;

export const SuggestionsList = styled.ul`
  position: absolute;
  top: 110%;      
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.cardBackground};
  border: 1px solid ${({ theme }) => theme.inputcolor}44;
  border-radius: 12px;
  max-height: 220px;
  overflow-y: auto;
  z-index: 1000;
  margin: 0;
  padding: 0;
  list-style: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const SuggestionItem = styled.li<{ active?: boolean }>`
  padding: 0.5rem 1rem;
  cursor: pointer;
  text-transform: capitalize;
  color: ${({ theme }) => theme.color};
  background-color: ${({ active }) => active ? '#f0f0f0' : 'transparent'};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.hover};
  }
`;
