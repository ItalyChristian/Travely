import { useState } from 'react';

import * as S from './styles';

import SouthAfrica from '../../../../assets/images/south-africa.png';
import Alaska1 from '../../../../assets/images/alaska.jpg';
import Alaska2 from '../../../../assets/images/alaska2.png';
import Alaska3 from '../../../../assets/images/alaska3.jpg';
import Italy from '../../../../assets/images/italy.jpg';

import Card from '../Card';

import Slider from "react-slick";

const Mobile = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
  return (
    <S.Container>
      <Slider {...settings}>
        <Card image={SouthAfrica} price={"2000$"} title={"Travel to South Africa"} description={"Shopping, Mountain, Snow & Ice"} evaluation={"50 reviews"} />
        <Card image={Alaska1} price={"5000$"} title={"Travel to Alaska"} description={"Snow & Ice"} evaluation={"05 reviews"} />
        <Card image={Alaska2} price={"5000$"} title={"Travel to Alaska"} description={"Snow & Ice"} evaluation={"04 reviews"} />
        <Card image={Alaska3} price={"5000$"} title={"Travel to Alaska"} description={"Snow & Ice"} evaluation={"05 reviews"} />
        <Card image={Italy} price={"5000$"} title={"Travel to Italy"} description={"Shopping, Religion, Culinary"} evaluation={"05 reviews"} />
      </Slider>
    </S.Container>
  );
}

export default Mobile;
