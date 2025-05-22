import styled from "styled-components";

export const Card = styled.div`
    background: #f3efef;
    border-radius: 8px;
    border: solid 1px black;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.342);
    padding: 1rem;
    transition: transform 0.2s ease;

    &:hover{
        transform: scale(1.02);
    }
`
export const Image = styled.img`
    width: 100%;
    border-radius: 8px;
`
export const Title = styled.h2`
    margin: 0.5rem 0;
    font-size: 1.2rem;
    text-decoration: none;
`
export const Info = styled.p`
    color: #555;
    font-size: 0.9rem;
    text-decoration: none;
`
