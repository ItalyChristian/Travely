import * as S from './styles';

import { GiCommercialAirplane } from 'react-icons/gi';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { FaHeadset } from 'react-icons/fa';

export default function OfferServices() {
  return (
    <S.Container id="features">
      <S.TextContainer>
        <S.Title>Reasons For Choose</S.Title>
        <S.Description>Wellnes for your body and mind.
          Our Team has been working throughout for 20 years.
        </S.Description>
      </S.TextContainer>

      <S.ItemsContainer>
        <S.Service>
          <S.RoundedItem><GiCommercialAirplane /></S.RoundedItem>
          <S.TextItemContainer>
            <S.TitleItem>Trip Planing</S.TitleItem>
            <S.DescriptionItem>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </S.DescriptionItem>
          </S.TextItemContainer> 
        </S.Service>
       
        <S.Service>
          <S.RoundedItem><HiOutlineDesktopComputer /></S.RoundedItem>
          <S.TextItemContainer>
            <S.TitleItem>Reliable Booking</S.TitleItem>
            <S.DescriptionItem>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </S.DescriptionItem>
          </S.TextItemContainer>
        </S.Service>
       
        <S.Service>
          <S.RoundedItem><FaHeadset /></S.RoundedItem>
          <S.TextItemContainer>
            <S.TitleItem>Super Service</S.TitleItem>
            <S.DescriptionItem>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </S.DescriptionItem>
          </S.TextItemContainer>
        </S.Service>
      </S.ItemsContainer>
    </S.Container>
  );
}
