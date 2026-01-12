import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const Card = styled.div`
  position: relative; 

  background-color: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.color};
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.inputcolor};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;
  background-size: cover;
  background-position: center;
  background-image: url(${({theme}) => theme.fundo});
  padding: 1rem;
`;
export const PokeNumber = styled.span`
  
  font-weight: 600;
  
  color: ${({ theme }) => theme.pokeNumber};
`;

export const Title = styled.h2`
  margin: 1rem 1rem 0.5rem;
  font-size: 1.5rem;
  gap: 0.5rem;
  display: flex;
  align-self: center;
  text-transform: capitalize;
  color: ${({theme}) => theme.color}
`;

export const Info = styled.p`
  margin: 0 1rem 1rem;
  color: ${({theme}) => theme.color};
  font-size: 0.95rem;
  line-height: 1.4;
  flex-grow: 1;
`;
