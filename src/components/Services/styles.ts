import styled from "styled-components";

export const Container = styled.div``;

export const TextContainer = styled.div`
    align-items: center;
    justify-content: center;

    padding-bottom: 3rem;
`;

export const Title = styled.h1`
    font-size: 3rem;
    text-align: center;
    color: #FFF;
`;

export const Text = styled.p`
    text-align: center;
    color: #FFF;

`;

/* 'P' = principal / 'I' = interno */ 
export const ContainerItemsP = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const ContainerItemsI = styled.div`
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-bottom: 3rem;
    padding-top: 3rem;
  
`;

export const ItemIcon = styled.div`
    width: 6rem;
    height: 6rem;

    border-radius: 4rem;

    background-color: #de3163;

    margin: auto;
    padding: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    svg{
        width: 3rem;
        height: 3rem;
    }
`;

export const ItemTitle = styled.h1`
    text-align: center;
    color: #FFF;
`;

export const ItemText = styled.p`
    text-align: center;
    color: #FFF;

`;