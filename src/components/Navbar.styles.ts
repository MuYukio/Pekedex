import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 1.5rem 2.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;
  gap:2rem;
`;

export const Logo = styled.img`
  height: 60px;
  margin-right: 1rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #333333;
  margin: 0;
  flex: 1;
  width: auto;
`;

export const SearchContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
  max-width: 700px;

  @media (min-width: 600px) {
    margin-top: 0;
  }
`;

export const SearchInput = styled.input`
  padding: 0.75rem 3rem;
  width: auto;
  border: 1px solid #cccccc;
  border-radius: 4px;
  flex: 1;
`;

export const SearchButton = styled.button`
  background-color: #007bff;
  color: #ffffff;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
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
  width: 60px;
  height: 60px;
`;
