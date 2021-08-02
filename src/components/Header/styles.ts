import styled from 'styled-components';

export const NavBar = styled.nav`
  position: fixed;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;

  line-height: inherit;
  padding: 50px;
  
  height: 25px;
  max-width: 1000px;
`;

export const Logo = styled.h1`
  float: left;
  margin-left: -20rem;

  color: #ff5f5f;
  font-size: 3.5rem;
`;

export const Item = styled.li`
  list-style: none;
  
  display: inline-block;

  padding: 15px;

  font-size: 1rem;
`; 

export const NavItems = styled.ul`

  &, ${Item} {
    list-style: none;
  
    display: inline-block;

    padding: 15px;

    font-size: 1rem;
  }


  a {
    text-decoration: none;
    font-weight: bold;
    color: #FFF;
  }

  a:hover {
    color: #ff5f5f;
  }
`;

export const Rounded = styled.div`
    border-radius: 350px;
    border: 3px solid #ff5f5f;
`;