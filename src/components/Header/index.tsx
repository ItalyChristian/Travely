import React, { useCallback, useState, useEffect } from 'react';

import Link from 'next/link';

import * as S from './styles';

import desktopLogo from "assets/images/favicon-16x16.png";
import mobileLogo from "assets/images/favicon-16x16.png";

import DesktopNav from './components/DesktopNav';
import MobileNav from './components/MobileNav';

const Header: React.FC = () => {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
  const [isHamburgerClicked, setIsHamburgerClicked] = useState<boolean>(false);

  const useWindowWidth = () => {
    const [windowWidth, setWindoWidth] = useState<undefined | number>(
      undefined
    );

    useEffect(() => {
      function handleResize() {
        setWindoWidth(window.innerWidth);
      }

      window.addEventListener('resize', handleResize);

      handleResize();

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [windowWidth]);

    return windowWidth;
  };

  const currentWidth = useWindowWidth();

  const currentLogo = currentWidth && currentWidth >= 768 ? desktopLogo : mobileLogo;

  const changeNavBarStyle = useCallback(() => {
    let currentScrollHeight = document.documentElement.scrollTop;

    if (currentScrollHeight > 0) return setIsMenuActive(true);

    setIsMenuActive(false);
  }, [setIsMenuActive]);

  useEffect(() => {
    window.addEventListener('scroll', changeNavBarStyle);
  }, [changeNavBarStyle]);

  return (
    <>
      <S.Container isActive={isMenuActive}>
        <S.ImageWrapper>
          <Link href="/">
            <S.Logo src={currentLogo.src} alt="Logotipo da Travely" title="Navegar até a home | Travely"></S.Logo>
          </Link>
        </S.ImageWrapper>

        {currentWidth && currentWidth > 768 ? (
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