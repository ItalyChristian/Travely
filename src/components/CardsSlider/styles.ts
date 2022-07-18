import styled from "styled-components";

export const Container = styled.div``;

export const Flex = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Arrow = styled.button<{ isLeft?: boolean }>`
  margin-left: -10rem;
  margin-right: -10rem;

  left: ${({ isLeft }) => isLeft ? '0' : '90%'};
  transform: translateY(-50%);

  @media screen and (max-width: 768px){
    gap: 8rem;
    
    margin-top: 30rem;
    margin-right: -15rem;
    margin-left: -15rem;
  }
`;

export const Box = styled.div`
  width: 80rem;
  height: 60rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12rem;

  @media screen and (max-width: 768px){
    width: unset;

    gap: 8rem;
  }
`;

export const CenteredSlide = styled.div`
  transform: scale(3);

  svg {
    fill: white;
  }
`;

