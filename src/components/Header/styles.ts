import styled, { keyframes } from "styled-components";

export const Placeholder = styled.div`
  background-color: var(--gun-powder);
`;

export const Container = styled.div<{ isActive: boolean }>`
  @keyframes animationForwardNav {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @keyframes animationBackwardNav {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  width: 100%;
  height: 8rem;

  display: flex;
  justify-content: space-between;
  position: ${({ isActive }) => isActive ?  'fixed' : 'absolute'};

  padding: 0 15%;

  /* background-color: ${({ isActive }) => isActive ?  'var(--grey)' : 'transparent'}; */
  background-color: transparent;

  border-radius: ${({ isActive }) => isActive ? '0 0 3rem 3rem' : '0'};
  box-shadow: ${({ isActive }) => isActive ?  '0px 0px 30px 15px var(--gun-powder)' : 'unset'};

  animation: ${({ isActive }) => isActive ? 'animationForwardNav 1s' : 'animationBackwardNav 1s'};
  animation-fill-mode: ${({ isActive }) => isActive ? 'forwards' : 'none'};
  transition: 1s;

  z-index: 10;

  @media (max-width: 1440px) {
    padding: 0 10%;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: transparent;

  @media (max-width: 767px) {
    min-width: 3.8rem;
    max-width: 3.8rem;
  }
`;

export const Title = styled.h1`
  color: white;
  font-size: 2rem;
`;

export const Logo = styled.img`
  width: 100%;
  max-width:  10rem;
  height: 100%;
  height: 7rem;

  cursor: pointer;

  background: transparent;

  /* @media (max-width: 767px) {
    height: 8rem;
  } */
`;
