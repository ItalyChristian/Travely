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
  color: white;
  font-size: 5rem;
`;

export const Description = styled.p`
  color: white;
  font-size: 2.5rem;
`;

export const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
`;

export const Service = styled.div``;

export const RoundedItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 5rem;

  background-color: var(--dark-gun-powder);
  border-radius: 100%;

  svg {
    width: 8rem;
    height: 8rem;
  }
`;

export const Icon = styled.div``;

export const TextItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TitleItem = styled.h1`
  color: white;
  font-size: 1.5rem;
`;

export const DescriptionItem = styled.p`
  width: 25rem;

  color: white;
  font-size: 1rem;
`;