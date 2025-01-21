import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../Header/Header';
import BaubleCard from '../../BaubleCard/BaubleCard';
import Filtration from '../../Filtration/Filtration';
import { addToFavorites, removeFromFavorites } from '../../store/reducers/GeneralReducer';

import {
    Container,
    CardList
}
    from './BaubleCollection.style';

const BaubleCollection = () => {
    const dispatch = useDispatch();
    const bauble = useSelector((state) => state.baubles.bauble) ;
    const favorites = useSelector((state) => state.baubles.favorites);
    const [filteredBaubles, setFilteredBaubles] = useState(bauble);
    const [selectedSize, setSelectedSize] = useState([]);
    const [currentAmount, setCurrentAmount] = useState(1);
    const [currentYear, setCurrentYear] = useState(1940);
    const [isFavoriteChecked, setIsFavoriteChecked] = useState(false);


    const handleShapeClick = (type) => {
        const filtered = bauble.filter((el) => el.type === type);
        setFilteredBaubles(filtered);
    };


    const handleColorClick = (color) => {
        const filtered = bauble.filter((el) => el.color === color);
        setFilteredBaubles(filtered);
    };

    const handleSizeClick = (size) => {
        if (selectedSize.includes(size)) {
            setSelectedSize([]);
            setFilteredBaubles(bauble);
        } else {
            setSelectedSize([size]);
            const filtered = bauble.filter((el) => el.size === size);
            setFilteredBaubles(filtered);
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


    const handleFavoriteFilter = (isChecked) => {
        setIsFavoriteChecked(isChecked);
        if (isChecked) {
            setFilteredBaubles(favorites);
        } else {
            setFilteredBaubles(bauble);
        }
    }


    const updateFavoriteStatus = (name, isFavorite) => {
        if (isFavorite) {
            dispatch(addToFavorites({ name }))
        } else {
            dispatch(removeFromFavorites({ name }))
        }
    }


    const handleResetFilters = () => {
        setFilteredBaubles(bauble);
        setSelectedSize([]);
        setCurrentYear(1940);
        setIsFavoriteChecked(false);
        setCurrentAmount(1);
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
                onFavoriteFilter={handleFavoriteFilter}
                isFavoriteChecked={isFavoriteChecked}
                onResetFilters={handleResetFilters}
                selectedSize={selectedSize}
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
                    onFavoriteChange={updateFavoriteStatus}
                />
            ))}
            </CardList>
        </Container>
    );
};

export default BaubleCollection;