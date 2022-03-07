import { useState } from 'react';

import Image from 'next';

import * as S from './styles';

import Wallpaper from 'assets/images/wallpaper.jpg';

const MainBanner = () => {

  return (
    <S.Container>
      <S.TextContainer>
        <S.Title>EXPLORE<br/>THE WORLD WITH US</S.Title>
        <S.Description>
          Wellness for your body and mind. Our team has been working throughout for 20 years. 
          We hove counted hundreds of travels and thousands of satisfied costumers.
        </S.Description>
      </S.TextContainer>
    </S.Container>
  )
}

export default MainBanner;