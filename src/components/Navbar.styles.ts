import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => `${theme.navbarBackground}dd`};
  padding: 1rem 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;
  gap: 1.5rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${({ theme }) => theme.border};

  @media (max-width: 768px) {
    padding: 1rem;
    flex-direction: column;
    align-items: stretch;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
`;

export const Logo = styled.img`
  height: 60px;
  width: 60px;
  object-fit: contain;
  transition: transform 0.3s ease;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));

  &:hover {
    transform: rotate(20deg);
  }
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  color: ${({ theme }) => theme.primary};
  margin: 0;
  font-weight: 800;
  letter-spacing: 1px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  padding-left: 10px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 80%;
    background: ${({ theme }) => theme.secondary};
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    text-align: center;
    
    &::before {
      display: none; 
    }
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex: 2;
  max-width: 500px;
  min-width: 300px;

  @media (max-width: 768px) {
    max-width: 100%;
    min-width: auto;
    order: 3;
    margin-top: 1rem;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;
  padding-right: 110px;
  border-radius: 50px;
  border: 2px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.inputBackground};
  color: ${({ theme }) => theme.inputcolor};
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.05);

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.primary}33,
                inset 0 2px 10px rgba(0, 0, 0, 0.08);
  }

  &::placeholder {
    color: ${({ theme }) => theme.inputcolor}99;
  }

  &:hover {
    border-color: ${({ theme }) => theme.primary}88;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  background: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonColor};
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    background: ${({ theme }) => theme.hover};
    transform: translateY(-50%) scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(-50%) scale(0.98);
  }
`;

export const ThemeToggleButton = styled.button`
  background: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonColor};
  border: none;
  padding: 0.75rem;
  border-radius: 50%;
  cursor: pointer;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  flex-shrink: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, 
      transparent 0%, 
      rgba(255, 255, 255, 0.1) 50%, 
      transparent 100%);
    transform: translateX(-100%);
  }

  &:hover {
    transform: rotate(15deg) scale(1.1);
    background: ${({ theme }) => theme.hover};
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);

    &::before {
      animation: shimmer 1.5s infinite;
    }
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 50px;
    height: 50px;
  }
`;

export const ThemeIcon = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  transition: transform 0.3s ease;

  ${ThemeToggleButton}:hover & {
    transform: rotate(180deg);
  }

  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

export const SuggestionsList = styled.ul`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.cardBackground};
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 16px;
  max-height: 300px;
  overflow-y: auto;
  z-index: 1001;
  margin: 0;
  padding: 0.5rem 0;
  list-style: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.inputBackground};
    border-radius: 0 16px 16px 0;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.primary};
    border-radius: 4px;
  }
`;

export const SuggestionItem = styled.li<{ active?: boolean }>`
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  text-transform: capitalize;
  color: ${({ theme }) => theme.color};
  background: ${({ active, theme }) => 
    active ? `${theme.primary}20` : 'transparent'};
  transition: all 0.2s ease;
  font-weight: 500;
  border-left: 3px solid 
    ${({ active, theme }) => active ? theme.primary : 'transparent'};
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &:hover {
    background: ${({ theme }) => `${theme.primary}15`};
    border-left-color: ${({ theme }) => theme.primary};
    padding-left: 1.75rem;
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.border}40;
  }

  &::before {
    font-size: 0.9rem;
    opacity: 0.7;
  }
`;

export const LoadingIndicator = styled.div`
  padding: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.color}99;
  font-style: italic;
`;

export const NoResults = styled.div`
  padding: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.color}99;
  font-style: italic;
`;