import styled from "styled-components";
import { Link } from "react-router-dom";


export const CardContainer = styled.div`
    border-radius: 10px;
    padding: 2rem;
    height: 16.25rem; 
    transition: 0.2s;
    cursor: pointer;
    background-color: ${props => props.theme['gray-600']};
    border: 1px solid transparent; 

    @media (max-width: 400px) {
        padding: 1.5rem; 
    }

    &:hover {
        transform: translateY(-4px);
        border-color: ${props => props.theme['gray-400']};
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        
        h3 {
            font-size: 1.3rem;
            font-weight: 700;
            color: ${props => props.theme.white};
            max-width: 75%; 
        }

        span {
            font-size: 0.875rem;
            color: ${props => props.theme['gray-400']};
            white-space: nowrap; 
        }

        @media (max-width: 400px) {
            flex-direction: column; 
            align-items: flex-start;
            gap: 0.25rem;
            margin-bottom: 0.5rem;
            
            h3 {
                max-width: 100%;
            }
        }
    }


    p {
        font-size: 1rem;
        line-height: 1.6;
        color: ${props => props.theme['gray-200']};
        margin-top: 1.25rem;

        overflow: hidden;
        text-overflow: ellipsis; 
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
    }
`;

export const Linkk = styled(Link)`
    text-decoration: none;
    display: block;
`