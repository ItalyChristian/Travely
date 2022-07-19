import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const BannerWrapper = styled.div`
  img {
    width:100vw;
    height:100vh;

    object-fit: cover;
    overflow: hidden;
  }
`;

export const BackgroundImage = styled.img``;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 5rem;
`;

export const Column = styled.div``;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10rem;

  position: absolute;
`;

export const Title = styled.h1`
  color: white;
  font-size: clamp(3rem, 100%, 5rem);

  z-index: 3;
`;

export const Description = styled.p`
  color: white;
  font-size: clamp(1.5rem, 100%, 3rem);
  text-align: justify;

  z-index: 3;
`;

export const Item = styled.p`
  color: white;
  font-size: clamp(1.5rem, 100%, 3rem);
  text-align: justify;

  z-index: 3;

  @media (max-width: 768px) {
    font-size: 2rem; 
    hyphens: auto;
  }
`;

export const Bottom = styled.div``;

export const MobileGrid = styled.div``;

