import * as S from './styles';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { useState } from 'react';

const Header = () => {
    const [isSearchActive, setIsSearchActive] = useState<boolean>(false);

    return (
        <S.NavBar>

            <S.LogoContainer>
                <S.Logo>Travely.</S.Logo>
            </S.LogoContainer>
            

            <S.NavItemsContainer>
                <S.Item>Home</S.Item>
            
                <S.Item><S.Rounded></S.Rounded></S.Item>
            
                <S.Item>Features</S.Item>
            
                <S.Item><S.Rounded></S.Rounded></S.Item>
            
                <S.Item>Destinations</S.Item>
            
                <S.Item><S.Rounded></S.Rounded></S.Item>
            
                <S.Item> Tours </S.Item>
            
                <S.Item><S.Rounded></S.Rounded></S.Item>
            
                <S.Item>Contact</S.Item>
            </S.NavItemsContainer>

            <S.IconsContainer>
                <S.SearchContainer>
                    <S.SearchInput isActive={isSearchActive} placeholder="Search..."></S.SearchInput>
                    <AiOutlineSearch onClick={() => {
                        isSearchActive ? setIsSearchActive(false) : setIsSearchActive(true)
                    }}
                    />
                <AiOutlineUser />
                </S.SearchContainer>
            </S.IconsContainer>

        </S.NavBar> 
    
    )
}

export default Header;