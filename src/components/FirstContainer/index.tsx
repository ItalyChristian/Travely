import React from "react";
import * as S from './styles';

const FirstContainer: React.FC = ({ children }) => {
    return (
        <S.Container>
            { children }
        </S.Container>
    )
}

export default FirstContainer;

