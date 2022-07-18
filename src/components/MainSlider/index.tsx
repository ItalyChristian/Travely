import * as S from './styles';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';

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
    nextArrow: <S.IconRight title="Próximo item"><RiArrowRightSLine /></S.IconRight>,
    prevArrow: <S.IconLeft title="Item anterior"><RiArrowLeftSLine /></S.IconLeft>
  };

  return (
    <S.Container id="home">
      <Slider {...settings}>
        {sliderData.map(({ id, title, description, image }) => (
          <S.BannerWrapper key={id}>
            <S.TextWrapper>
              <S.BannerTitle>{title}</S.BannerTitle>

              <S.BannerParagraph lang="pt-br">{description}</S.BannerParagraph>
            
            </S.TextWrapper>

            <S.BackgroundImage src={image}  alt="Imagem de fundo do slider"/>
          </S.BannerWrapper>
        ))}
      </Slider>
    </S.Container>
  );
}

export default MainSlider;
