import { useState } from 'react';

import * as S from './styles';

import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

import SouthAfrica from '../../assets/images/south-africa.png';
import Alaska1 from '../../assets/images/alaska.jpg';
import Alaska2 from '../../assets/images/alaska2.png';
import Alaska3 from '../../assets/images/alaska3.jpg';
import Italy from '../../assets/images/italy.jpg';

import Card from './Card';

const CardsSlider = () => {
  const [circles, setCircles] = useState([
    <Card image={SouthAfrica} price={"2000$"} title={"Travel to South Africa"} description={"Shopping, Mountain, Snow & Ice"} evaluation={"50 reviews"} />,
    <Card image={Alaska1} price={"5000$"} title={"Travel to Alaska"} description={"Snow & Ice"} evaluation={"05 reviews"} />,
    <Card image={Alaska2} price={"5000$"} title={"Travel to Alaska"} description={"Snow & Ice"} evaluation={"04 reviews"} />,
    <Card image={Alaska3} price={"5000$"} title={"Travel to Alaska"} description={"Snow & Ice"} evaluation={"05 reviews"} />,
    <Card image={Italy} price={"5000$"} title={"Travel to Italy"} description={"Shopping, Religion, Culinary"} evaluation={"05 reviews"} />,
  ]);

  const center = Math.floor(circles.length / 2);

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

  const generateCards = () => {
    return (
      <>
        {circles[center - 1]}
          <S.CenteredSlide > {circles[center]} </S.CenteredSlide>
        {circles[center + 1]}
      </>
    )
  }

  return (
    <S.Container>
      <S.Flex>
        <S.Arrow onClick={handleClickLeft} isLeft><BsArrowLeft /></S.Arrow>
 
        <S.Box>{generateCards()}</S.Box>

        <S.Arrow onClick={handleClickRight}><BsArrowRight /></S.Arrow>
      </S.Flex>
    </S.Container>
  );
}

export default CardsSlider;
