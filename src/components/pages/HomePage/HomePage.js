import React from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
}
    from './HomePage.style';

const HomePage = () => {

    return (
        <div>
            <h1>Help Grandma decorate the Christmas tree</h1>
            <Link to="/BaubleCollection">
                <Button>Start</Button>
            </Link>
        </div>
    );
};

export default HomePage;