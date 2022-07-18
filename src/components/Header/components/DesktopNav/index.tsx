import React from 'react';

import Link from 'next/link'

import * as S from './styles';

const DesktopNav: React.FC = ()  => {
  return (
    <S.Container>
      <S.NavBarUl>
        <S.Links title="Navegar até a página Home | Travely">
          <Link href="/">Home</Link>
        </S.Links>

        <S.Links title="Navegar até a página Serviços | Travely">
          <Link href="/services">Features</Link>
        </S.Links>
        
        <S.Links title="Navegar até a página Empresa | Travely">
          <Link href="/company">Destination</Link>
        </S.Links>
        
        <S.Links title="Navegar até a página Contato | Travely">
          <Link href="/contact">Contact</Link>
        </S.Links>

      </S.NavBarUl>
    </S.Container>
  )
}

export default DesktopNav;