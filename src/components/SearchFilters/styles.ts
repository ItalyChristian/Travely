import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 5rem;
`;

export const ContainerItems = styled.div`
  width: 100%;
  max-width: 130rem;

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

export const SelectControl = styled.div``;

export const Label = styled.label``;

export const Select = styled.select`
  width: 20rem;
  height: 5rem;

  border: none;
  border-radius: 1rem;
  outline: none;

  /* remove alguns predefinidos dos navegadores */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url(http://www.webcis.com.br/images/imagens-noticias/select/ico-seta-appearance.gif) no-repeat #eeeeee;
`;

export const Option = styled.option``;

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