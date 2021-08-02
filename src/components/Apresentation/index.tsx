import wallpaper from '../../assets/wallpaper.jpg';
import * as S from './styles';

const Apresentation = () => {
    return (
        <S.Container>
            <S.Title>EXPLORE<br/>THE WORLD WITH US</S.Title>
            <S.Text>Wellness for your body and mind. Our team has been working throughout for 20 years. 
                We hove counted hundreds of travels and thousands of satisfied costumers.</S.Text>
            <S.Wallpaper><img src={wallpaper} id="wallpaper"/></S.Wallpaper>
        </S.Container>
    )
}

export default Apresentation;