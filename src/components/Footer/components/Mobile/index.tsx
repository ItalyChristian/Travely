import * as S from './styles';

import Wallpaper3 from 'assets/images/wallpaper3.jpg';

import { SiInstagram, SiFacebook, SiTwitter } from 'react-icons/si';

const Mobile: React.FC = ()  => {
  return (
    <S.Container>
      <S.BannerWrapper>
        <S.TextWrapper>
          <S.Grid>
            <S.Column>
              <S.Title>Travely.</S.Title>
            </S.Column>

            <S.Links>
              <S.Link>About us .</S.Link>
              <S.Link>Tour list .</S.Link>
              <S.Link>Popular destination</S.Link>
            </S.Links>

            <S.Icons>
              <S.Icon><SiInstagram /></S.Icon>
              <S.Icon><SiFacebook /></S.Icon>
              <S.Icon><SiTwitter /></S.Icon>
            </S.Icons>
          </S.Grid>
        </S.TextWrapper>
        
        <S.BackgroundImage src={Wallpaper3.src}  alt="Imagem de fundo do slider"/>
      </S.BannerWrapper>
    </S.Container>
  );
}

export default Mobile;