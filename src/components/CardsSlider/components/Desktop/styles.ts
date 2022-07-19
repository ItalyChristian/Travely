import styled from "styled-components";

export const Container = styled.div``;

export const Flex = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;

export const Arrow = styled.button<{ isLeft?: boolean }>`
  margin-left: -45rem;
  margin-right: -45rem;
  margin-top: 60rem;

  left: ${({ isLeft }) => isLeft ? '0' : '90%'};
  transform: translateY(-50%);

  @media screen and (max-width: 768px){
    gap: 8rem;
    
    margin-top: 30rem;
    margin-right: -8rem;
    margin-left: -8rem;
  }
`;

export const Box = styled.div`
  width: 100rem;
  height: 60rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15rem;

  @media screen and (max-width: 768px){
    width: unset;

    gap: 2rem;
  }
`;

export const CenteredSlide = styled.div`
  transform: scale(1.5);

  svg {
    fill: white;
  }
`;

