import wallpaper from '../../assets/wallpaper.jpg';
import * as S from './styles';
import Container from '../FirstContainer'

const Apresentation = () => {
    return (
        <Container>
            <S.ApresentationText> 
                <S.Title>EXPLORE<br/>THE WORLD WITH US</S.Title>
                <S.Text>Wellness for your body and mind. Our team has been working throughout for 20 years. 
                    We hove counted hundreds of travels and thousands of satisfied costumers.</S.Text>
            </S.ApresentationText>

            <S.Button>Know More</S.Button>

            <S.Wallpaper src={wallpaper} alt="wallpaper"></S.Wallpaper>
        </Container>
    )
}

export default Apresentation;

