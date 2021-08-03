import styled from "styled-components";

export const ContainerItems = styled.div`
  background-color: #de3163;

  width: 65rem;
  height: 8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.9rem;

  border-radius: 0.5rem;
`;

export const ListItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  list-style: none;
  text-decoration: none;

  gap: 2rem;
`;

export const Item = styled.li`
    display: inline;
`;

export const Select = styled.select`
    width: 10rem;
    height: 3rem;

    background-color: #FFF;
    border-radius: 0.8rem;
    appearance: none;
    border-style: none;

`;

export const SelectTitle = styled.option`

`;

export const MembersQuantity = styled.input`
    width: 10rem;
    height: 3rem;

    background-color: #FFF;
    border-radius: 0.8rem;
    border-style: none;
    appearance: none;
 `;

 export const Icon = styled.div`
    width: 2rem;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 0.8rem;
    border-style: none;
    box-shadow: 10px 5px 5px 5px;

    background-color: #8A0829;

    padding: 0.5rem;

 `;