import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

export const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

export const LoadMoreButton = styled.button`
  background-color: #28a745;
  color: #ffffff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  margin: 2rem auto;
  display: block;

  &:hover {
    background-color: #218838;
  }
`;
