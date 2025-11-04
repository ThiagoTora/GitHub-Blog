import styled from "styled-components";

export const BlogContainer = styled.main`
    max-width: 864px;
    margin: 0 auto;
    margin-top: 6rem; 
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (max-width: 600px) {
        padding: 0 1.5rem;
        margin-top: 16rem;
    }

    @media (min-width: 600px) {
        padding: 0 1.5rem;
        margin-top: 8rem;
    }

     @media (min-width: 900px) {
        padding: 0 1.5rem;
        margin-top: 5rem;
    }
`;

export const CardsGrid = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); 
    gap: 2rem;

    @media (max-width: 650px) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
`;