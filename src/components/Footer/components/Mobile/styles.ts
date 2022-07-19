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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5rem;
`;

export const Column = styled.div``;

export const Links = styled.div`
  display: flex;
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10rem;

  position: absolute;

  @media screen and (max-width: 768px){
    padding: 0;
  }
`;

export const Title = styled.h1`
  color: white;
  font-size: 3rem;

  z-index: 3;
`;

export const Link = styled.a`
  color: white;
  font-size: clamp(1.5rem, 100%, 2rem);
  text-align: justify;

  z-index: 3;
`;

export const Icons = styled.div`
  display: flex;

  gap: 2rem;
`;

export const Icon = styled.div`
  svg {
    width: 3rem;
    height: 3rem;

    fill: white;
  }
`;

export const Bottom = styled.div``;


