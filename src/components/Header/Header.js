import React from 'react';
import { Link } from 'react-router-dom';
import {
    HeaderContainer,
    Button
}
    from './Header.style';

const Header = () => (
    <HeaderContainer>
        <nav>
            <Link to='/'>
                <Button>HomePage</Button>
            </Link>
            <Link to='/BaubleCollection'>
                <Button>Baubles</Button>
            </Link>
            <Link to='/TreeDecorator'>
                <Button>Trees</Button>
            </Link>
        </nav>
    </HeaderContainer>
);

export default Header;