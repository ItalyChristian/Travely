import React from 'react';

import Link from 'next/link';

import * as S from './styles';

import { GiHamburgerMenu } from 'react-icons/gi';

interface MobileNav {
  isHamburgerClicked: boolean;
  setIsHamburgerClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNav: React.FC<MobileNav> = ({ isHamburgerClicked, setIsHamburgerClicked })  => {
  return (
    <>
      <S.HamburgerIcon onClick={() => setIsHamburgerClicked(!isHamburgerClicked)}><GiHamburgerMenu /></S.HamburgerIcon>
        <S.HamburgerNav>
          <S.HamburgerUl isClicked={isHamburgerClicked}>
            <S.HamburgerLinks title="Navegar até a página Home | Travely">
              <Link href="/"><S.HamburgerLink onClick={() => setIsHamburgerClicked(!isHamburgerClicked)}>Home</S.HamburgerLink></Link>
            </S.HamburgerLinks>
            
            <S.HamburgerLinks title="Navegar até a página Serviços | Travely">
              <Link href="/services"><S.HamburgerLink onClick={() => setIsHamburgerClicked(!isHamburgerClicked)}>Serviços</S.HamburgerLink></Link>
            </S.HamburgerLinks>
            
            <S.HamburgerLinks title="Navegar até a página Empresa | Travely">
              <Link href="/company"><S.HamburgerLink onClick={() => setIsHamburgerClicked(!isHamburgerClicked)}>Empresa</S.HamburgerLink></Link>
            </S.HamburgerLinks>
            
            <S.HamburgerLinks title="Navegar até a página Contato | Travely">
              <Link href="/contact">
                <S.HamburgerLink onClick={() => setIsHamburgerClicked(!isHamburgerClicked)}>
                  Fale Conosco
                </S.HamburgerLink>
              </Link>
            </S.HamburgerLinks>
          </S.HamburgerUl>
      </S.HamburgerNav>
    </>
  )
}

export default MobileNav;