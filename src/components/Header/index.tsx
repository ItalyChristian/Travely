import React, { useCallback, useState, useEffect } from 'react';

import Link from 'next/link';

import * as S from './styles';

import desktopLogo from "assets/images/favicon-16x16.png";
import mobileLogo from "assets/images/favicon-16x16.png";

import DesktopNav from './components/DesktopNav';
import MobileNav from './components/MobileNav';

import useWindowSize from 'hooks/useWindowSize';

const Header: React.FC = () => {
  const { width } = useWindowSize();

  const isMobileSize = !!width && width <= 1024;

  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
  const [isHamburgerClicked, setIsHamburgerClicked] = useState<boolean>(false);

  return (
    <>
      <S.Container isActive={isMenuActive}>
        <S.ImageWrapper>
          <S.Title>Travely.</S.Title>
          <Link href="/">
            <S.Logo src={desktopLogo.src} alt="Logotipo da Travely" title="Navegar até a home | Travely"></S.Logo>
          </Link>
        </S.ImageWrapper>

        {width && width > 768 ? (
          <DesktopNav />
        ) : (
          <MobileNav
            isHamburgerClicked={isHamburgerClicked}
            setIsHamburgerClicked={setIsHamburgerClicked}
          />
        )}
      </S.Container>

      <S.Placeholder />
    </>
  )
}

export default Header;