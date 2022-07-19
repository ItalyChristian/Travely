import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: white;

  border-radius: 1rem;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;

export const Image = styled.img`
width: 100%;
  max-width: 25rem;
  height: 25rem;

  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;

  /* @media screen and (max-width: 768px){
    width: 15rem;
    height: 15rem;

    border-top-left-radius: 0;
    border-top-right-radius: 0;
  } */
`;

export const CartIcon = styled.div`
  position: absolute;
  bottom: 85%;
  left: 85%;

  padding: 0.5rem;
  
  background-color: var(--light-grey);

  border-radius: 100%;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const Price = styled.div`
  padding: 0.5rem;

  position: absolute;
  top: 95%;
  left: 80%;
 
  background-color: var(--dark-grey);

  font-size: 1.2rem;
  font-weight: bold;
  color: white;

  border-radius: 0.1rem;
`;

export const TextContainer = styled.div`
  padding-left: 0.5rem;
  padding-top: 0.5rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: black;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: black;
`;

export const EvaluationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.1rem;
`;

export const StarsContainer = styled.div`
  svg { 
    width: 0.5rem;
    height: 0.5rem;
  }
`;

export const Item = styled.img`
  width: 8rem;
  height: auto;
`;

export const EvaluationText = styled.p`

  font-size: clamp(1rem, 100%, 1.5rem);
  color: black;
`;

