import styled from 'styled-components';

export const HamburgerNav = styled.nav`
  width: 100%;

  display: flex;
  flex-direction: column;

  position: relative;
  margin: 0;
`;

export const HamburgerUl = styled.ul<{ isClicked: boolean }>`
  width: 25%;
  
  flex-direction: column;

  position: fixed;
  right: 0;
  margin: 0;

  padding-top: 3rem;
 
  border-bottom-left-radius: 2rem;

  background: var(--grey);

  list-style-type: none;

  clip-path: ${({ isClicked }) => isClicked ? 'circle(2200px at 90% -20%)' : 'circle(100px at 90% -20%)'};
  -webkit-clip-path: ${({ isClicked }) => isClicked ? 'circle(2200px at 90% -20%)' : 'circle(100px at 90% -20%)'};
  transition: all 0.8s ease-out;

  z-index: 99;

  :hover{
    border-bottom: 0.2rem solid var(--blue);
  }
`;

export const HamburgerLinks = styled.li`
  margin-top: 6rem;
  margin-left: -1rem;

  font-size: 4rem;

  @media screen and (max-width: 300px){
    margin-left: -2rem;
  }
`;

export const HamburgerLink = styled.a`
  cursor: pointer;

  svg {
    fill: white;
  }
`;

export const HamburgerIcon = styled.button`
  width: 10rem;
  height: 10rem;

  position: absolute;
  right: 0;

  padding-left: 4rem;

  color: white;
  font-size: 4rem;

  border: none;

  background-color: transparent;

  z-index: 100;
`;