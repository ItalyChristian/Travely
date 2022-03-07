import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative; 

  overflow: hidden;
`;

export const BannerWrapper = styled.div`
  img {
    width:100vw;
    height:100vh;

    object-fit: cover;
    overflow: hidden;
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  height: 100vh;

  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BannerTitle = styled.h1`
  width: 15%;

  margin: 10rem 20vw 0 20vw;

  color: white;
  font-size: clamp(4rem, 4vw, 8rem);
  font-weight: 400;

  z-index: 3;

  @media (max-width: 768px) {
    font-size:  3rem;
  }
`;

export const BannerParagraph = styled.p`
  width: clamp(15rem, 60vw, 70rem);

  margin: 2rem 20vw 0 20vw;

  color: white;
  font-size: clamp(2.3rem, 1.3vw, 3rem);
  text-align: justify;

  z-index: 3;

  @media (max-width: 768px) {
    font-size: 2rem; 
    hyphens: auto;
  }

  @media (max-width: 320px) {
    font-size: 1.8rem;
    hyphens: auto;
  }
`;

export const IconLeft = styled.button`
  position: absolute;
  left: 2vw;

  font-size: 10rem;

  color: white !important;

  z-index: 5;

  svg {
    position: absolute;
    top: 0;
    left: 0;
  }

  :before {
    display: none;
  }

  @media (max-width: 450px) {
    left: -2rem;
  }

  @media (max-width: 280px) {
    left: -3rem;
  }
`;

export const IconRight = styled.button`
  position: absolute;
  right: 7vw;

  font-size: 10rem;

  color: white !important;

  z-index: 5;

  svg {
    position: absolute;
    top: 0;
    left: 0;
  }

  :before {
    display: none;
  }

  @media (max-width: 768px) {
    right: 9vw;
  }

  @media (max-width: 450px) {
    right: 14vw;
  }

  @media (max-width: 360px) {
    right: 16vw;
  }

  @media (max-width: 320px) {
    right: 18vw;
  }
`;

export const Links = styled.a``;