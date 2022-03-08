import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Flex = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Arrow = styled.button<{ isLeft?: boolean }>`
  position: absolute;
  top: 50%;
  left: ${({ isLeft }) => isLeft ? '0' : '95%'};
  transform: translateY(-50%);
`;

export const Box = styled.div`
  width: 80rem;
  height: 80rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7rem;
`;

export const Circle = styled.div<{ current?: boolean; color: string }>`
  width: 10rem;
  height: 10rem;

  transform: ${({ current }) => current ? 'scale(1.2)' : 'unset'};
  background-color: ${({ color }) => color};

  border-radius: 50%;
`;
