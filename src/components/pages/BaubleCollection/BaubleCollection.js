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
    const [filteredBaubles, setFilteredBaubles] = useState(bauble);
    const [selectedSize, setSelectedSize] = useState([]);
    const [selectedColor, setSelectedColor] = useState([]);
    const [selectedShape, setSelectedShape] = useState([]);
    const [currentAmount, setCurrentAmount] = useState(1);
    const [currentYear, setCurrentYear] = useState(1940);



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


    const handleAmountFilter = (value) => {
        setCurrentAmount(value)
        const filtered = bauble.filter((el) => {
            const amount = parseInt(el.amount.match(/\d+/)[0], 10);
            return amount === value;
        });

        setFilteredBaubles(filtered);
    };


    const handleYearFilter = (value) => {
        setCurrentYear(value);
        const filtered = bauble.filter((el) => {
            const yearOfPurchase = parseInt(el.yearOfPurchase.match(/\d+/)[0], 10);
            return yearOfPurchase === value;
        });

        setFilteredBaubles(filtered);
    };


    const handleNameSortAscending = () => {
        const filtered = [...bauble].sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();

            if (nameA < nameB) {
                return -1
            } else if (nameA < nameB) {
                return 1
            }
            return 0;
        })
        return filtered;
    }


    const handleYearSort = () => {
        const filtered = [...bauble].sort((a, b) => {
            const yearA = parseInt(a.yearOfPurchase.match(/\d+/)[0], 10);
            const yearB = parseInt(b.yearOfPurchase.match(/\d+/)[0], 10);

            return yearA - yearB
        })
        return filtered;
    }


    const handleCommonSort = (e) => {
        const selectOptions = e.target.value;
        let sortedBaubles;

        if (selectOptions === 'name') {
            sortedBaubles = handleNameSortAscending()
        } else if (selectOptions === 'year') {
            sortedBaubles = handleYearSort()
        }

        setFilteredBaubles(sortedBaubles);
    }


    const handleResetFilters = () => {
        setFilteredBaubles(bauble);
    }


    return (
        <Container>
            <Header />
            <Filtration 
                onShapeFilter={handleShapeClick}
                onColorFilter={handleColorClick}
                onSizeFilter={handleSizeClick}
                onAmountFilter={handleAmountFilter}
                onYearFilter={handleYearFilter}
                onNameFilter={handleCommonSort}
                currentAmount={currentAmount}
                currentYear={currentYear}
                onResetFilters={handleResetFilters}
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