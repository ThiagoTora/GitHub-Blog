import styled from "styled-components";
import HeadBG from "../../assets/HeadBG.svg";

export const HeaderContainer = styled.header`
  background-image: url(${HeadBG});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  height: clamp(2rem, 38vw, 25rem);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    height: 26rem;
  }

  @media (max-width: 500px) {
    height: 25rem;
  }
`;

export const HeaderContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 1rem;

  h1 {
    color: ${(props) => props.theme["blue"]};

    @media (max-width: 500px) {
      font-size: 1.5rem;
    }
  }
`;

export const FloatingCard = styled.div`
  position: absolute;
  bottom: -0.5rem;
  width: 100%;
  display: flex;
  justify-content: center;

  

   @media (max-width: 500px) {
       bottom: -5rem;
    }
 
   @media (max-width: 900px) {
       bottom: -5rem;
    }
`;
