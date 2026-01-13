import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

export const InfoCard = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: ${({ theme }) => theme.cardShadow};
  border: 1px solid ${({ theme }) => theme.border};
`;

export const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonColor};
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    background: ${({ theme }) => theme.hover};
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  max-width: 400px;
  width: 100%;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 20px;
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.primary}10 0%, 
    ${({ theme }) => theme.secondary}10 100%);
  border: 2px solid ${({ theme }) => theme.border};
  width: 100%;
  transition: all 0.3s ease;
`;

export const Image = styled.img`
  width: 250px;
  height: 250px;
  object-fit: contain;
  filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2));
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CurrentFormLabel = styled.div`
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.inputBackground};
  border-radius: 50px;
`;

export const ShinyToggleButton = styled.button<{ isActive: boolean }>`
  background: ${({ theme, isActive }) => 
    isActive 
      ? `linear-gradient(135deg, ${theme.warning} 0%, #ff9800 100%)`
      : theme.buttonBackground};
  color: ${({ theme }) => theme.buttonColor};
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    background: ${({ theme, isActive }) => 
      isActive 
        ? `linear-gradient(135deg, #ffb74d 0%, ${theme.warning} 100%)`
        : theme.hover};
  }

  &:active {
    transform: translateY(-1px);
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  text-transform: capitalize;
  color: ${({ theme }) => theme.color};
`;

export const Number = styled.span`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.primary}20 0%, 
    ${({ theme }) => theme.secondary}20 100%);
  padding: 0.5rem 1rem;
  border-radius: 12px;
`;

export const TypesContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const TypeBadge = styled.span<{ type: string }>`
  background: ${({ theme, type }) => 
    theme.typeColors?.[type.toLowerCase()] || theme.primary};
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  text-transform: capitalize;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
  padding: 1.5rem;
  background: ${({ theme }) => theme.inputBackground};
  border-radius: 16px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.color};

  svg {
    color: ${({ theme }) => theme.primary};
  }
`;

export const DescriptionTitle = styled.h2`
  font-size: 1.8rem;
  margin: 2rem 0 1rem;
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    display: block;
    width: 4px;
    height: 24px;
    background: ${({ theme }) => theme.secondary};
    border-radius: 2px;
  }
`;

export const Info = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  padding: 1.5rem;
  background: ${({ theme }) => theme.inputBackground};
  border-radius: 12px;
  margin-bottom: 2rem;
  border-left: 4px solid ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.color};
`;

export const StatContainer = styled.div`
  margin-bottom: 1.5rem;
`;

export const StatName = styled.div`
  text-transform: capitalize;
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.color};
`;

export const StatValue = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  font-size: 1.1rem;
`;

export const StatBarBackground = styled.div`
  width: 100%;
  height: 16px;
  border-radius: 10px;
  background: ${({ theme }) => theme.inputBackground};
  overflow: hidden;
  position: relative;
`;

export const StatBarFill = styled.div<{ value: number }>`
  width: ${({ value }) => Math.min(value, 100)}%;
  height: 100%;
  border-radius: 10px;
  background: ${({ value, theme }) => {
    if (value < 50) return `linear-gradient(90deg, ${theme.danger} 0%, #ff6b6b 100%)`;
    if (value < 80) return `linear-gradient(90deg, ${theme.warning} 0%, #ffd43b 100%)`;
    return `linear-gradient(90deg, ${theme.success} 0%, #4caf50 100%)`;
  }};
  transition: width 1s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.2) 50%,
      transparent 100%
    );
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

export const EvolutionChain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 2rem;
  background: ${({ theme }) => theme.inputBackground};
  border-radius: 16px;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);

      img {
        transform: scale(1.1);
      }
    }

    img {
      width: 100px;
      height: 100px;
      transition: transform 0.3s ease;
    }

    span {
      text-transform: capitalize;
      font-weight: 600;
      color: ${({ theme }) => theme.primary};
    }
  }
`;

export const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.primary};

  &::after {
    content: '';
    width: 40px;
    height: 40px;
    margin-left: 1rem;
    border: 4px solid ${({ theme }) => theme.border};
    border-top-color: ${({ theme }) => theme.primary};
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

export const ErrorMessage = styled.div`
  text-align: center;
  padding: 3rem;
  color: ${({ theme }) => theme.danger};
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 16px;
  margin: 2rem;
  border: 2px solid ${({ theme }) => theme.danger};
`;
export const EvolutionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 1rem;
  border-radius: 12px;
  background: ${({ theme }) => theme.cardBackground};
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

    img {
      transform: scale(1.1);
    }
  }

  img {
    width: 100px;
    height: 100px;
    transition: transform 0.3s ease;
    object-fit: contain;
  }

  span {
    text-transform: capitalize;
    font-weight: 600;
    color: ${({ theme }) => theme.primary};
    text-align: center;
  }
`;