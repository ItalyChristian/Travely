import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerItems = styled.div`
  width: 65rem;
  height: 8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 5rem;

  background-color: var(--spun-pearl);

  border-radius: 0.5rem;
`;

export const ListItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  list-style: none;
  text-decoration: none;
`;

export const Item = styled.li``;

// export const MembersQuantity = styled.input`
//   width: 10rem;
//   height: 3rem;

//   background-color: #FFF;
//   border-radius: 0.8rem;
//   border-style: none;
//   appearance: none;
//  `;

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