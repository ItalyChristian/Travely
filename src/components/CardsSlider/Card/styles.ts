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
  width: 10rem;
  height: 10rem;

  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;

  @media screen and (max-width: 768px){
    width: 5rem;
    height: 5rem;

    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;

export const CartIcon = styled.div`
  position: absolute;
  bottom: 80%;
  left: 80%;

  padding: 0.3rem;
  
  background-color: var(--light-grey);

  border-radius: 100%;
`;

export const Price = styled.div`
  padding: 0.3rem;

  position: absolute;
  top: 95%;
  left: 80%;
 
  background-color: var(--dark-grey);

  font-size: 0.4rem;
  font-weight: bold;
  color: white;

  border-radius: 0.1rem;
`;

export const TextContainer = styled.div`
  padding-left: 0.5rem;
  padding-top: 0.5rem;
`;

export const Title = styled.h1`
  font-size: 0.5rem;
  color: black;
`;

export const Description = styled.p`
  font-size: 0.3rem;
  color: black;
`;

export const EvaluationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.1rem;
`;

export const StarsContainer = styled.div`
  svg { 
    width: 0.3rem;
    height: 0.3rem;
  }
`;

export const Item = styled.img`
  width: 2.5rem;
  height: auto;
`;

export const EvaluationText = styled.p`
  margin-top: 0.1rem;

  font-size: 0.3rem;
  color: black;
`;

