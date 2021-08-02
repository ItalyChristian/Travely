import { Link } from 'react-router-dom';

import * as S from './styles';

const Header = () => {
    return (
        <S.NavBar className='navbar'>
            <S.Logo>Travely.</S.Logo>

            <S.NavItems>
                <S.Item><Link to="/">Home</Link></S.Item>
            
                <S.Item><div className="rounded"></div></S.Item>
            
                <S.Item><Link to="/">Features</Link></S.Item>
            
                <S.Item><div className="rounded"></div></S.Item>
            
                <S.Item><Link to="/">Destinations</Link></S.Item>
            
                <S.Item><div className="rounded"></div></S.Item>
            
                <S.Item><Link to="/">Tours</Link></S.Item>
            
                <S.Item><div className="rounded"></div></S.Item>
            
                <S.Item><Link to="/">Contact</Link></S.Item>
            </S.NavItems>
        </S.NavBar> 
    
    )
}

export default Header;