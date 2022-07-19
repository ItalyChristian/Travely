import * as S from './styles';

import Wallpaper3 from 'assets/images/wallpaper3.jpg';

const Desktop: React.FC = ()  => {
  return (
    <S.Container>
      <S.BannerWrapper>
        <S.TextWrapper>
          <S.Grid>
            <S.Column>
              <S.Title>Travely.</S.Title>
              <S.Description>We've got  the solution: world-class training and development programs development programs developed by Grid universities and companies.</S.Description>
            </S.Column>

            <S.Column>
              <S.Title>Quick Links</S.Title>
              <S.Item>About us</S.Item>
              <S.Item>Tour list</S.Item>
              <S.Item>Popular destination</S.Item>
              <S.Item>Gallery</S.Item>
            </S.Column>

            <S.Column>
              <S.Title>Features</S.Title>
              <S.Item>Spin to Win</S.Item>
              <S.Item>Leader Board</S.Item>
              <S.Item>Partner with us</S.Item>
              <S.Item>Corporate</S.Item>
              <S.Item>Earn money with Affiliate</S.Item>
              <S.Item>Team plan</S.Item>
            </S.Column>

            <S.Column>
              <S.Title>Contact</S.Title>
              <S.Item>123 Street Somewhere</S.Item>
              <S.Item>Phone: 1-234-056-789-000</S.Item>
              <S.Item>Email: example@example.com </S.Item>
            </S.Column>
          </S.Grid>
        </S.TextWrapper>
        
        <S.BackgroundImage src={Wallpaper3.src}  alt="Imagem de fundo do slider"/>
      </S.BannerWrapper>
    </S.Container>
  );
}

export default Desktop;