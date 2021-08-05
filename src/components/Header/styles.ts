import styled from 'styled-components';

export const NavBar = styled.div`
  width: 100%;
  height: 3rem;
  
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;
`;

export const LogoContainer = styled.div`
  width: 33.3%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: auto;
`;

export const Logo = styled.h1`
  color: #de3163;
  font-size: 3.5rem;
`;

export const NavItemsContainer = styled.div`
  width: 33.3%;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  list-style: none;

  gap: 1rem;

  font-size: 1rem;
  color: #FFF;
`;

export const Item = styled.div`
  text-decoration: none;
  list-style: none;

  margin-top: 30px;

  font-weight: bold;
  font-size: 1rem;
  color: #FFF;

  :hover {
    color: #de3163;
  }
  
`; 


export const Rounded = styled.div`
  width: 5px;
  height: 5px;

  background-color: #de3163;

  border-radius: 50px;

`;

export const IconsContainer = styled.div`
  width: 33.3%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 30px;

  svg{
    fill: #FFF;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  gap: 1rem;

  svg {
    cursor: pointer;

    transition: 0.15s ease;

    border-radius: 50%;
    
    padding: 0.25rem;

    :hover {
      background-color: gray;
    }
  }
`;

export const SearchInput = styled.input<{ isActive: boolean }>`
  width: ${({ isActive }) => isActive ? '30%' : 0};

  border: none;

  outline: 0;

  transition: 0.15s ease; 
`;