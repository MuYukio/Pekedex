import styled from 'styled-components';


export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.navbarBackground};
  padding: 1.5rem 2.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;
  gap:2rem;
  border: dashed 1px ${({ theme }) => theme.color};
`;

export const Logo = styled.img`
  height: 60px;
  margin-right: 1rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.color};
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
  background-color: ${({ theme }) => theme.inputBackground};
  color: ${({ theme }) => theme.color};
  border-radius: 4px;
  flex: 1;

  &::placeholder {
    color: ${({ theme })=> theme.inputcolor};
  }

`;

export const SearchButton = styled.button`
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonColor};
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
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
