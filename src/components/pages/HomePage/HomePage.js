// @ts-ignore
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';

import {
    ContainerMainPage,
    ContainerForTitle,
    Title,
    Button,
}
    from './HomePage.style';

const HomePage = () => {

    return (
        <div>
            <ContainerMainPage>
                <ContainerForTitle>
                    <Title>Help Grandma decorate the Christmas tree</Title>
                </ContainerForTitle>
                <Link to="/BaubleCollection">
                    <Button>Start</Button>
                </Link>
            </ContainerMainPage>
            <Footer />
        </div>
    );
};

export default HomePage;