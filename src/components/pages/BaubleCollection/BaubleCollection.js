import React from 'react';
import Header from '../../Header/Header';
import BaubleCard from '../../BaubleCard/BaubleCard';
import Filtration from '../../Filtration/Filtration';
import { initialState } from '../../store/reducers/GeneralReducer'

import {
    Container,
    CardList
}
    from './BaubleCollection.style';

const BaubleCollection = () => {

    const bauble = initialState.bauble;
    console.log(bauble)

    return (
        <Container>
            <Header />
            <Filtration />
            
            <CardList>
                {bauble.map((el, ind) => (
                <BaubleCard
                    key={ind}
                    name={el.name}
                    baubleImg={el.src}
                    amount={el.amount}
                    yearOfPurchase={el.yearOfPurchase}
                    type={el.type}
                    colour={el.colour}
                    size={el.size}
                    favorite={el.favorite}
                />
            ))}
            </CardList>
        </Container>
    );
};

export default BaubleCollection;