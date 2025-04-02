// @ts-ignore
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ball from '../icons/svg/ball-2.svg';


import {
    HeaderContainer,
    Navigation,
    Button,
    InfoWrapper,
    Image,
    AmountText
}
    from './Header.style';

const Header = () => {
    const favoriteCount = useSelector((state) => state.baubles.favoriteCount);

    return (
    <HeaderContainer>
        <Navigation>
            <Link to='/'>
                <Button>HomePage</Button>
            </Link>
            <Link to='/BaubleCollection'>
                <Button>Baubles</Button>
            </Link>
            <Link to='/TreeDecorator'>
                <Button>Trees</Button>
            </Link>
        </Navigation>
        <InfoWrapper>
            <Image src={ball} alt="ball" />
                <AmountText>{favoriteCount}</AmountText>
        </InfoWrapper>
    </HeaderContainer>
    )
};

export default Header;