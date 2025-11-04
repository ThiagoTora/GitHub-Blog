import styled from "styled-components";

export const SearchFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.75rem; 
    margin-top: 4rem; 
    width: 100%;

    @media (max-width: 900px) {
        margin-top: 7rem; 
    }

    input {
        flex: 1;
        border-radius: 6px;
        outline: none;
        border: 1px solid ${props => props.theme['gray-400']};
        
        background-color: ${props => props.theme['gray-700']};
        padding: 0.75rem 1rem; 
        
        color: ${props => props.theme['gray-100']};

        &::placeholder{
            color: ${props => props.theme['gray-200']};
        }
    }
`;

export const SearchHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
        font-size: 1.125rem;
        color: ${props => props.theme.white};
    }

    span {
        font-size: 0.875rem;
        color: ${props => props.theme['gray-400']};
    }
    
    @media (max-width: 400px) {
        span {
            font-size: 0.75rem;
        }
    }
`;