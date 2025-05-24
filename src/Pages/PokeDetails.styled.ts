import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const BackLink = styled.a`
  background-color: #28a745;
  color: #ffffff;
  border: none;
  padding: 0.5rem;
  border-radius: 4px;
  width: 5rem;
  cursor: pointer;
  margin: 2rem;
  display: block;
  text-decoration: none;

  &:hover {
    background-color: #218838;
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: contain;
  border-radius: 8px;
  border: 2px solid #e0e0e0;
  background-color: #f9f9f9;
`;

export const ImageLabel = styled.span`
  margin-top: 0.5rem;
  font-size: 1.25rem;
  color: #484b4b;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  text-transform: capitalize;
  margin-bottom: 0.5rem;
  color: #2c3e50;
`;

export const Number = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: #7f8c8d;
  margin-bottom: 1.5rem;
`;

export const DescriptionTitle = styled.h2`
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
`;

export const Info = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #34495e;
  text-align: justify;
`;
