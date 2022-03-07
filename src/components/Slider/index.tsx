import React from 'react';

import * as S from './styles';

import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';

import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { sliderData } from './data';

const MainSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <S.IconRight title="Avançar slider"><RiArrowRightSLine /></S.IconRight>,
    prevArrow: <S.IconLeft title="Voltar slider"><RiArrowLeftSLine /></S.IconLeft>
  };

  return (
    <S.Container>
      <Slider {...settings}>
        {sliderData.map(({ id, title, description, image }) => (
          <S.BannerWrapper key={id}>
            <S.TextWrapper>
              <S.BannerTitle>{title}</S.BannerTitle>

              <S.BannerParagraph lang="pt-br">{description}</S.BannerParagraph>
            
            </S.TextWrapper>

            <img src={image}  alt='Imagem de fundo do slider'/>
          </S.BannerWrapper>
        ))}
      </Slider>
    </S.Container>
  );
}

export default MainSlider;
