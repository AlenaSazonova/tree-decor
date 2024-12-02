import React, { useState } from 'react';
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
    //console.log(bauble);
    const [filteredBaubles, setFilteredBaubles] = useState(bauble);
    const [selectedSize, setSelectedSize] = useState([]);
    const [selectedColor, setSelectedColor] = useState([]);
    const [selectedShape, setSelectedShape] = useState([]);




    const handleShapeClick = (type) => {
        let updatedShape;

        if (selectedShape.includes(type)) {
            updatedShape = selectedShape.filter((el) => el !== type)
        } else {
            updatedShape = [...selectedShape, type]
        } 
        setSelectedShape(updatedShape);

        if (updatedShape.length > 0) {
            const filtered = bauble.filter((el) => updatedShape.includes(el.type));
            setFilteredBaubles(filtered);
        } else {
            setFilteredBaubles(bauble);
        }
    };


    const handleColorClick = (color) => {
        let updatedColor;
        if (selectedColor.includes(color)) {
            updatedColor = selectedColor.filter((el) => el !== color)
        } else {
            updatedColor = [...selectedColor, color]
        }
        setSelectedColor(updatedColor);

        if (updatedColor.length > 0) {
            const filtered = bauble.filter((el) => updatedColor.includes(el.color));
            setFilteredBaubles(filtered);
        } else {
            setFilteredBaubles(bauble);
        }

    };

    const handleSizeClick = (size) => {
        let updatedSizes;

        if (selectedSize.includes(size)) {
            updatedSizes = selectedSize.filter((el) => el !== size)
        } else {
            updatedSizes  = [...selectedSize, size]
        }
        setSelectedSize(updatedSizes)

        if(updatedSizes.length > 0) {
            const filtered = bauble.filter((el) => updatedSizes.includes(el.size));
            setFilteredBaubles(filtered);
        } else {
            setFilteredBaubles(bauble);
        }
    };


    return (
        <Container>
            <Header />
            <Filtration 
                onShapeFilter={handleShapeClick}
                onColorFilter={handleColorClick}
                onSizeFilter={handleSizeClick}
            />
            
            <CardList>
                {filteredBaubles.map((el, ind) => (
                <BaubleCard
                    key={ind}
                    name={el.name}
                    baubleImg={el.src}
                    amount={el.amount}
                    yearOfPurchase={el.yearOfPurchase}
                    type={el.type}
                    color={el.color}
                    size={el.size}
                    favorite={el.favorite}
                />
            ))}
            </CardList>
        </Container>
    );
};

export default BaubleCollection;