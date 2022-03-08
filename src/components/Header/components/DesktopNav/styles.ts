import styled from 'styled-components';

export const NavBar = styled.div``;

export const Container = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavBarUl = styled.ul`
  display: flex;
  gap: clamp(6rem, 5.5vw, 10rem);

  font-size: clamp(2rem, 100%, 5rem);
  color: white;

  list-style-type: none;
`;

export const Links = styled.li`
  a:hover {
    border-bottom: 0.2rem solid var(--gun-powder);
  }
`;

