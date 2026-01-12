import styled from "styled-components";

export const Container = styled.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => theme.color};
`;

export const BackLink = styled.a`
  background-color: ${({ theme }) => theme.primary};
  color: #ffffff;
  text-decoration: none;       
  border: none;
  padding: 0.5rem 1rem;       
  border-radius: 4px;
  cursor: pointer;
  margin: 2rem 0;             
  display: inline-flex;       
  align-items: center;         
  font-weight: 500;
  font-size: 0.95rem;

  &:hover {
    background-color: ${({ theme }) => theme.hover};
  }
`;

export const ContainerImage = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  justify-items: center;
  margin-bottom: 2rem;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

export const ImageLabel = styled.span`
  margin-top: 0.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.secondary};
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  font-size: 2rem;
  margin-bottom: 1rem;
  gap: 1rem;
  text-transform: capitalize;
`;

export const Number = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
`;

export const DescriptionTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.primary};
`;

export const Info = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  background-color: ${({ theme }) => theme.inputBackground};
  padding: 1rem;
  border-radius: 12px;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const StatContainer = styled.div`
  margin-bottom: 1rem;
`;

export const StatName = styled.span`
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
  margin-bottom: 4px;
`;

export const StatBarBackground = styled.div`
  width: 100%;
  height: 14px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.inputBackground};
  overflow: hidden;
`;

export const StatBarFill = styled.div<{ value: number }>`
  width: ${({ value }) => Math.min(value, 100)}%;
  height: 100%;
  border-radius: 10px;
  background: ${({ value }) =>
    value < 50 ? "#f44336" : value < 100 ? "#ffeb3b" : "#4caf50"};
  transition: width 0.3s ease;
`;