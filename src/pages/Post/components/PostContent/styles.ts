import styled from "styled-components";

export const ContentContainer = styled.main`
    width: 100%;
    padding: 2.5rem 2rem 5rem; 
    line-height: 1.6;
    color: ${(props) => props.theme['gray-200']}; 
    font-size: 1rem; 
   

    @media (max-width: 600px) {
        padding: 1.5rem 0.5rem; 
    }
    
    p {
        margin-bottom: 1rem;
    }

    a {
        color: ${(props) => props.theme['blue']}; 
        text-decoration: underline;
        
        &:hover {
            opacity: 0.8;
        }
    }

    pre {
        background: ${(props) => props.theme['gray-700']}; 
        padding: 1rem;
        border-radius: 6px;
        overflow-x: auto;
        margin-top: 1rem;
        margin-bottom: 1rem;

        code { 
            font-size: 0.875rem;
            line-height: 1.4;
            color: ${(props) => props.theme['gray-100']}; 
        }
    }

    h1, h2, h3, h4 {
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: ${(props) => props.theme.white};
    }
`;

export const Descricao = styled.div`
    padding-bottom: 1rem;
    
    hr{
        margin-top: 1rem;
    }
`