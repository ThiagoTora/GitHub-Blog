import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.main`
    background-color: ${(props) => props.theme["gray-700"]};
    width: 864px;
    height: 200px;

    border-radius: 10px;
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

    display: flex;
    gap: 2rem;
    padding: 2rem;

    
    position: absolute;
    bottom: -6rem;
    left: 50%;
    transform: translateX(-50%);

   
    @media (max-width: 600px) {
        width: 90%;
        height: auto;

        position: relative;
        bottom: -17rem; 
        left: auto;
        transform: none;

        margin: 4rem auto 0;
        flex-direction: column;
        padding: 1.5rem;
    }

    @media (min-width: 600px) and (max-width: 900px) {
        width: 90%;
        height: auto;

        position: relative;
        bottom: -7rem; 
        left: auto;
        transform: none;

        margin: 4rem auto 0;
        padding: 1.5rem;
        flex-direction: row; 
    }

    
    @media (min-width: 900px) {
        width: 864px;
        height: 200px;

        position: absolute; 
        bottom: -6rem; 
        left: 50%;
        transform: translateX(-50%);

        margin: 0;
        flex-direction: row;
    }

    img {
        width: 15rem;
        height: auto;

        border-radius: 10%;
        border: 2px solid ${(props) => props.theme["gray-500"]};
        object-fit: cover;

        @media (max-width: 600px) {
            width: 100%;
            height: 250px;
            margin-bottom: 1rem;
        }

        @media (min-width: 600px) {
            width: 35%; 
            height: 100%;
        }

        @media (min-width: 900px) {
            width: 15rem;
            height: auto;
        }
    }
`;

export const InfoContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
`;

export const InfoHeader = styled.header`
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    font-weight: bold;

    a {
        font-size: 14px;
        color: ${(props) => props.theme["blue"]};
    }

    @media (min-width: 600px) {
        font-size: 12px;
    }
`;

export const InfoBio = styled.p`
    color: ${(props) => props.theme["gray-200"]};
    font-size: 14px;
`;

export const InfoDados = styled.footer`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    font-size: 12px;
    color: ${(props) => props.theme["gray-200"]};

    @media (max-width: 500px) {
        flex-wrap: wrap;
        gap: 1rem;
    }

    span {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        color: ${(props) => props.theme["gray-300"]};

        &:first-child {
            font-weight: bold;
        }

        svg {
            color: ${(props) => props.theme["gray-400"]};
        }
    }
`;



//------------------------------------------------------------------------------------------------


export const PostContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 01rem;
    padding: 1.5rem;

    background-color: ${(props) => props.theme["gray-700"]};
    border-radius: 1rem;

 @media (max-width: 600px) {
        width: 90%;
        height: auto;

        position: relative;
        bottom: 0; 
        left: auto;
        transform: none;

        margin: 4rem auto 0;
        padding: 1.5rem;
    }

    @media (min-width: 600px) and (max-width: 900px) {
        width: 90%;
        height: auto;

        position: relative;
        bottom: -0rem; 
        left: auto;
        transform: none;

        margin: 4rem auto 0;
        padding: 1.5rem;
    }

    
    @media (min-width: 900px) {
        width: 864px;
        height: 200px;

        position: absolute; 
        bottom: -6rem; 
        left: 50%;
        transform: translateX(-50%);

        margin: 0;
    }
`;

export const PostHeaderBack = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 12px;

    a{
        color: ${props => props.theme.blue};
    }
`;

export const LinkBack = styled(Link)`
    font-size: 9px;
    color: ${props => props.theme["blue"]};
`;

export const PostTittle = styled.div`
    color: ${props => props.theme.white};
    
    @media (max-width: 900px) {
        display: flex;
        justify-content: center;
    }
`;

export const PostAssets = styled.div`
    color: ${props => props.theme['gray-400']};
    display: flex;
    gap: 1rem;

    @media (max-width: 900px) {
        flex-wrap: wrap; 
        justify-content: center;
        gap: 0.5rem;
    }

    span {
        display: flex;
        gap: 0.3rem; 
        align-items: center;
    }
`;