import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 5rem;
`;

export const Title = styled.h1`
  font-size: clamp(2rem, 100%, 5rem);

`;

export const Description = styled.p`
  font-size: clamp(1.5rem, 100%, 2.5rem);
`;

export const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10rem;

  @media screen and ( max-width: 768px ){
    flex-direction: column;
  }
`;

export const Service = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const RoundedItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 5rem;

  background-color: var(--dark-gun-powder);
  border-radius: 100%;

  svg {
    width: 10rem;
    height: 10rem;
  }

  @media screen and (max-width: 768px){
    padding: 2rem;

    svg {
      width: 5rem;
      height: 5rem;
    }
  }
`;

export const TextItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  text-align: center;
`;

export const TitleItem = styled.h1`
  font-size: 2.3rem;
`;

export const DescriptionItem = styled.p`
  width: 25rem;

  font-size: 1.8rem;
`;