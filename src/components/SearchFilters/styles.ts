import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 5rem;

  background-color: var(--spun-pearl);

  border-radius: 0.5rem;

  @media screen and (max-width: 768px){
    width: 80%;

    padding: 0;
  }
`;

export const ListItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  list-style: none;
  text-decoration: none;

  @media screen and (max-width: 768px){
    flex-direction: column;
  }
`;

export const Item = styled.li``;

 export const Icon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: unset;

  border: none;

  svg {
    width: 2rem;
    height: 2rem;
  }
`;