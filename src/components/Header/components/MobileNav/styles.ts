import styled from 'styled-components';

export const HamburgerNav = styled.nav`
  position: relative;

  margin: 0;

  width: 100%;
`;

export const HamburgerUl = styled.ul<{ isClicked: boolean }>`
  position: fixed;
  right: 0;

  background: var(--grey);

  height: 100vh;
  width: clamp(50%, 45rem, 100%);

  flex-direction: column;

  clip-path: ${({ isClicked }) => isClicked ? 'circle(2200px at 90% -20%)' : 'circle(100px at 90% -20%)'};
  -webkit-clip-path: ${({ isClicked }) => isClicked ? 'circle(2200px at 90% -20%)' : 'circle(100px at 90% -20%)'};

  transition: all 0.8s ease-out;

  list-style-type: none;

  margin: 0;

  z-index: 99;

  :hover{
    border-bottom: 0.2rem solid var(--blue);
  }
`;

export const HamburgerLinks = styled.li`
  color: white;
  
  font-size: 4rem;

  margin-top: 6rem;
`;

export const HamburgerLink = styled.a`
  cursor: pointer;

  :hover{
    border-bottom: 0.2rem solid var(--blue);
  }
`;

export const HamburgerIcon = styled.button`
  position: absolute;
  right: 0;

  color: white;

  background-color: transparent;

  border: none;

  font-size: 4.5rem;

  width: 10rem;
  height: 10rem;

  z-index: 100;
`;