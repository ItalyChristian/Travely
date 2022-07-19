import React from 'react';

import Link from 'next/link';

import * as S from './styles';

import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillHome } from 'react-icons/ai';
import { GrResources } from 'react-icons/gr';
import { GiCommercialAirplane } from 'react-icons/gi';
import { IoMdContact } from 'react-icons/io';

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
              <Link href="/">
                <S.HamburgerLink onClick={() => setIsHamburgerClicked(!isHamburgerClicked)}>
                  <AiFillHome />
                </S.HamburgerLink>
              </Link>
            </S.HamburgerLinks>
            
            <S.HamburgerLinks title="Navegar até a página Serviços | Travely">
              <Link href="/features">
                <S.HamburgerLink onClick={() => setIsHamburgerClicked(!isHamburgerClicked)}>
                  <GrResources/>
                </S.HamburgerLink>
              </Link>
            </S.HamburgerLinks>
            
            <S.HamburgerLinks title="Navegar até a página Empresa | Travely">
              <Link href="/company">
                <S.HamburgerLink onClick={() => setIsHamburgerClicked(!isHamburgerClicked)}>
                  <GiCommercialAirplane />
                </S.HamburgerLink>
              </Link>
            </S.HamburgerLinks>
            
            <S.HamburgerLinks title="Navegar até a página Contato | Travely">
              <Link href="/contact">
                <S.HamburgerLink onClick={() => setIsHamburgerClicked(!isHamburgerClicked)}>
                  <IoMdContact />
                </S.HamburgerLink>
              </Link>
            </S.HamburgerLinks>
          </S.HamburgerUl>
      </S.HamburgerNav>
    </>
  )
}

export default MobileNav;