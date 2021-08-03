import React from 'react';
import * as S from './styles';
import Container from '../SecondContainer';
import { GiCommercialAirplane } from 'react-icons/gi';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { FaHeadset } from 'react-icons/fa';

const Services: React.FC = () => {
    return (
        <S.Container>

            <S.TextContainer>
                <S.Title>Reason For Choose</S.Title>
                <S.Text>Wellness for your body and mind. Our team has <br/> been working throughout for 20 years.
                </S.Text>
            </S.TextContainer>

            <S.ContainerItemsP>
                <S.ContainerItemsI>
                    <S.ItemIcon><GiCommercialAirplane/></S.ItemIcon>
                    <S.ItemTitle>Trip Planing </S.ItemTitle>
                    <S.ItemText>Lorem Ipsum is simply dummy text <br/> of the printing and typesetting industry.</S.ItemText>
                </S.ContainerItemsI>

                <S.ContainerItemsI>
                    <S.ItemIcon><HiOutlineDesktopComputer/></S.ItemIcon>
                    <S.ItemTitle>Reliable Booking </S.ItemTitle>
                    <S.ItemText>Lorem Ipsum is simply dummy text <br/> of the printing and typesetting industry.</S.ItemText>
                </S.ContainerItemsI>

                <S.ContainerItemsI>
                    <S.ItemIcon><FaHeadset/></S.ItemIcon>
                    <S.ItemTitle>Super Service</S.ItemTitle>
                    <S.ItemText>Lorem Ipsum is simply dummy text <br/> of the printing and typesetting industry.</S.ItemText>
                </S.ContainerItemsI>
            </S.ContainerItemsP>

        </S.Container>
    )
}

export default Services;

