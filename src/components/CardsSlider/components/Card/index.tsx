import * as S from './styles';
import * as T from './interfaces';

import { ImCart } from 'react-icons/im';

import StarsRating from '../../../../assets/images/stars-rating.png';

export default function Card({ image, price, title, description, evaluation }: T.CardProps) {
  return (
    <S.Container>
      <S.ImageContainer>
        <S.Image src={image.src} />
        <S.CartIcon ><ImCart /></S.CartIcon>
        <S.Price>{price}</S.Price>
      </S.ImageContainer>
     
      <S.TextContainer>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.EvaluationContainer>
          <S.StarsContainer><S.Item src={StarsRating.src} /></S.StarsContainer>
          <S.EvaluationText>{evaluation}</S.EvaluationText> 
        </S.EvaluationContainer>
      </S.TextContainer>
    </S.Container>
  );
}
