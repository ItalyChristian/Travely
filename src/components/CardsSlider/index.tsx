import { useState } from 'react';
import { useEffect } from 'react';
import { StyledComponent } from 'styled-components';
import * as S from './styles';

const CardsSlider = () => {
  const [circles, setCircles] = useState([
    <S.Circle color="red" />,
    <S.Circle color="blue" />,
    <S.Circle color="yellow" />,
    <S.Circle color="black" />,
    <S.Circle color="white" />,
  ]);

  const center = Math.floor(circles.length / 2);

  const circlesLength = circles.length;

  const handleClickLeft = () => {
    setCircles((previous) => {
      const last = previous.at(-1);

      if (!last) return previous;

      return [last, ...previous.slice(0, previous.length - 1)];
    });
  }

  const handleClickRight = () => {
    setCircles((previous) => {
      const first = previous.at(0);

      if (!first) return previous;

      return [...previous.slice(1), first];
    });
  }

  console.log(circles)



  const generateCards = () => {
    return (
      <>
        {circles[center - 1]}
        <div style={{ transform: 'scale(1.5)' }}> {circles[center]} </div>
        {circles[center + 1]}
      </>
    )
  }

  return (
    <S.Container>
      <S.Flex>
        <S.Arrow onClick={handleClickLeft} isLeft>SETA PA ESQUERDA</S.Arrow>

        <S.Box>
          {generateCards()}
        </S.Box>

        <S.Arrow onClick={handleClickRight}>SETA PA DIREITA</S.Arrow>
      </S.Flex>
    </S.Container>
  );
}

export default CardsSlider;
