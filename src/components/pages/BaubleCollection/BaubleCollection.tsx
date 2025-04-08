import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import BaubleCard from '../../BaubleCard/BaubleCard';
import Filtration from '../../Filtration/Filtration';
import { addToFavorites, removeFromFavorites, Bauble } from '../../store/reducers/GeneralReducer';


import {
    Container,
    CardList
}
    from './BaubleCollection.style';

const BaubleCollection = () => {
    const dispatch = useDispatch();
    const bauble = useSelector((state: any) => state.baubles.bauble) ;
    const favorites = useSelector((state: any) => state.baubles.favorites);
    const [filteredBaubles, setFilteredBaubles] = useState<Bauble[]>(bauble);
    const [selectedSize, setSelectedSize] = useState < string[]>([]);
    const [currentAmount, setCurrentAmount] = useState<number>(1);
    const [currentYear, setCurrentYear] = useState<number>(1940);
    const [isFavoriteChecked, setIsFavoriteChecked] = useState<boolean>(false);


    const handleShapeClick = (type: string) => {
        const filtered = bauble.filter((el: Bauble) => el.type === type);
        setFilteredBaubles(filtered);
    };


    const handleColorClick = (color: string) => {
        const filtered = bauble.filter((el: Bauble) => el.color === color);
        setFilteredBaubles(filtered);
    };

    const handleSizeClick = (size: string) => {
        if (selectedSize.includes(size)) {
            setSelectedSize([]);
            setFilteredBaubles(bauble);
        } else {
            setSelectedSize([size]);
            const filtered = bauble.filter((el: Bauble) => el.size === size);
            setFilteredBaubles(filtered);
        }
    };


    const handleAmountFilter = (value: number) => {
        setCurrentAmount(value)
        const filtered = bauble.filter((el: Bauble) => {
            const amount = parseInt(el.amount, 10);
            return amount === value;
        });

        setFilteredBaubles(filtered);
    };


    const handleYearFilter = (value: number) => {
        setCurrentYear(value);
        const filtered = bauble.filter((el: Bauble) => {
            const yearOfPurchase = parseInt(el.yearOfPurchase, 10);
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


    const handleCommonSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectOptions = e.target.value;
        let sortedBaubles: Bauble[] | undefined;

        if (selectOptions === 'name') {
            sortedBaubles = handleNameSortAscending()
        } else if (selectOptions === 'year') {
            sortedBaubles = handleYearSort()
        }

        if (sortedBaubles) {
            setFilteredBaubles(sortedBaubles);
        }
    }


    const handleFavoriteFilter = (isChecked: boolean) => {
        setIsFavoriteChecked(isChecked);
        if (isChecked) {
            setFilteredBaubles(favorites);
        } else {
            setFilteredBaubles(bauble);
        }
    }


    const updateFavoriteStatus = (name: string, isFavorite: boolean) => {
        if (!bauble) return;

        const item = bauble.find((el: Bauble) => el.name === name);
        if (item) {
            if (isFavorite) {
                dispatch(addToFavorites(item));
            } else {
                dispatch(removeFromFavorites(item));
            }
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
            <div>
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
            </div>
            <Footer />
        </Container>
    );
};

export default BaubleCollection;