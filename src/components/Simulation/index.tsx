import { AiOutlineSearch } from 'react-icons/ai';
import * as S from './styles';
import Container from '../SecondContainer'

const Simulation = () => {
    return (
        <Container>
            <S.ContainerItems>
                <S.ListItems>
                    <S.Item><S.Select>Select location</S.Select></S.Item>

                    <S.Item><S.Select>Tour type</S.Select></S.Item>

                    <S.Item><S.Select>Select month</S.Select></S.Item>

                    <S.Item><S.MembersQuantity type="number" placeholder="Member"></S.MembersQuantity></S.Item>

                    <S.Item><S.Icon><AiOutlineSearch /></S.Icon></S.Item> 
                </S.ListItems>
            </S.ContainerItems>
        </Container>
    )
}

export default Simulation;

