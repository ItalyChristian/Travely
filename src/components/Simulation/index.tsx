import { AiOutlineSearch } from 'react-icons/ai';
import * as S from './styles';

const Simulation = () => {
    return (
        <S.Container>
            <S.ListItems>
                <S.Item>
                    <select>Select location</select>
                </S.Item>
                <S.Item>
                    <select>Tour type</select>
                </S.Item>
                <S.Item>
                    <select>Select month</select>
                </S.Item>
                <S.Item>
                    <input type="number" placeholder="Member"></input>
                </S.Item>
                <S.Item><AiOutlineSearch /></S.Item>
            </S.ListItems>
        </S.Container>
    )
}

export default Simulation;