import { createSlice } from '@reduxjs/toolkit';


import bauble1 from '../../icons/bauble/1.png';
import bauble2 from '../../icons/bauble/2.png';
import bauble3 from '../../icons/bauble/3.png';
import bauble4 from '../../icons/bauble/4.png';
import bauble5 from '../../icons/bauble/5.png';
import bauble6 from '../../icons/bauble/6.png';
import bauble7 from '../../icons/bauble/7.png';
import bauble8 from '../../icons/bauble/8.png';
import bauble9 from '../../icons/bauble/9.png';
import bauble10 from '../../icons/bauble/10.png';
import bauble11 from '../../icons/bauble/11.png';
import bauble12 from '../../icons/bauble/12.png';
import bauble13 from '../../icons/bauble/13.png';
import bauble14 from '../../icons/bauble/14.png';
import bauble15 from '../../icons/bauble/15.png';
import bauble16 from '../../icons/bauble/16.png';
import bauble17 from '../../icons/bauble/17.png';
import bauble18 from '../../icons/bauble/18.png';
import bauble19 from '../../icons/bauble/19.png';
import bauble20 from '../../icons/bauble/20.png';


import tree1 from '../../icons/tree/1.png';
import tree2 from '../../icons/tree/2.png';
import tree3 from '../../icons/tree/3.png';
import tree4 from '../../icons/tree/4.png';
import tree5 from '../../icons/tree/5.png';
import tree6 from '../../icons/tree/6.png';

import background1 from '../../icons/background/1.jpg';
import background2 from '../../icons/background/2.jpg';
import background3 from '../../icons/background/3.jpg';
import background4 from '../../icons/background/4.jpg';
import background5 from '../../icons/background/5.jpg';
import background6 from '../../icons/background/6.jpg';
import background7 from '../../icons/background/7.jpg';
import background8 from '../../icons/background/8.jpg';
import background9 from '../../icons/background/9.jpg';
import background10 from '../../icons/background/10.jpg';


import ball from '../../icons/shape/ball.svg';
import bell from '../../icons/shape/bell.svg';
import figurine from '../../icons/shape/bird_toy.png';
import pine from '../../icons/shape/pine.svg';
import snowflake from '../../icons/shape/snowflake.svg';
import star from '../../icons/shape/star.png';


import white from '../../icons/colour/white.png';
import blue from '../../icons/colour/blue.png';
import green from '../../icons/colour/green.png';
import red from '../../icons/colour/red.png';
import yellow from '../../icons/colour/yellow.png';





export const initialState = {

    bauble: [
        { src: bauble1, name: 'Большой шар с рисунком', amount: 'Количество: 5', yearOfPurchase: 'Год покупки: 1960', type: 'Форма: шар', color: 'Цвет: желтый', size: 'Размер: большой', favorite: 'Любимая: нет' },
        { src: bauble2, name: 'Зеленый шар с цветами', amount: 'Количество: 5', yearOfPurchase: 'Год покупки: 2000', type: 'Форма: шар', color: 'Цвет: зеленый', size: 'Размер: большой', favorite: 'Любимая: нет' },
        { src: bauble3, name: 'Синий матовый шар', amount: 'Количество: 7', yearOfPurchase: 'Год покупки: 1990', type: 'Форма: шар', color: 'Цвет: синий', size: 'Размер: большой', favorite: 'Любимая: нет' },
        { src: bauble4, name: 'Красно-белый шар', amount: 'Количество: 2', yearOfPurchase: 'Год покупки: 1980', type: 'Форма: фигурка', color: 'Цвет: красный', size: 'Размер: большой', favorite: 'Любимая: нет' },
        { src: bauble5, name: 'Красный виноград', amount: 'Количество: 4', yearOfPurchase: 'Год покупки: 1980', type: 'Форма: фигурка', color: 'Цвет: красный', size: 'Размер: средний', favorite: 'Любимая: нет' },
        { src: bauble6, name: 'Красный шар с рисунком', amount: 'Количество: 6', yearOfPurchase: 'Год покупки: 2010', type: 'Форма: шар', color: 'Цвет: красный', size: 'Размер: большой', favorite: 'Любимая: нет' },
        { src: bauble7, name: 'Молочно-белый шар', amount: 'Количество: 9', yearOfPurchase: 'Год покупки: 1960', type: 'Форма: шар', color: 'Цвет: белый', size: 'Размер: средний', favorite: 'Любимая: нет' },
        { src: bauble8, name: 'Красный шар', amount: 'Количество: 10', yearOfPurchase: 'Год покупки: 2010', type: 'Форма: шар', color: 'Цвет: красный', size: 'Размер: большой', favorite: 'Любимая: нет' },
        { src: bauble9, name: 'Колокольчик старинный', amount: 'Количество: 9', yearOfPurchase: 'Год покупки: 1950', type: 'Форма: колокол', color: 'Цвет: белый', size: 'Размер: средний', favorite: 'Любимая: нет' },
        { src: bauble10, name: 'Белый шар ретро', amount: 'Количество: 7', yearOfPurchase: 'Год покупки: 1950', type: 'Форма: шар', color: 'Цвет: белый', size: 'Размер: большой', favorite: 'Любимая: нет' },
        { src: bauble11, name: 'Желтая шишка', amount: 'Количество: 8', yearOfPurchase: 'Год покупки: 1970', type: 'Форма: шишка', color: 'Цвет: желтый', size: 'Размер: маленький', favorite: 'Любимая: нет' },
        { src: bauble12, name: 'Белая снежинка', amount: 'Количество: 6', yearOfPurchase: 'Год покупки: 2000', type: 'Форма: снежинка', color: 'Цвет: белый', size: 'Размер: средний', favorite: 'Любимая: нет' },
        { src: bauble13, name: 'Красно-желтый ангелочек', amount: 'Количество: 2', yearOfPurchase: 'Год покупки: 1970', type: 'Форма: фигурка', color: 'Цвет: красный', size: 'Размер: маленький', favorite: 'Любимая: нет' },
        { src: bauble14, name: 'Красный колокольчик', amount: 'Количество: 4', yearOfPurchase: 'Год покупки: 1980', type: 'Форма: колокол', color: 'Цвет: красный', size: 'Размер: маленький', favorite: 'Любимая: нет' },
        { src: bauble15, name: 'Красная снежинка', amount: 'Количество: 12', yearOfPurchase: 'Год покупки: 1990', type: 'Форма: снежинка', color: 'Цвет: красный', size: 'Размер: средний', favorite: 'Любимая: нет' },
        { src: bauble16, name: 'Желтая снежинка', amount: 'Количество: 11', yearOfPurchase: 'Год покупки: 2010', type: 'Форма: снежинка', color: 'Цвет: желтый', size: 'Размер: средний', favorite: 'Любимая: нет' },
        { src: bauble17, name: 'Красно-желтая шишка', amount: 'Количество: 8', yearOfPurchase: 'Год покупки: 1940', type: 'Форма: шишка', color: 'Цвет: красный', size: 'Размер: маленький', favorite: 'Любимая: нет' },
        { src: bauble18, name: 'Красно-желтый грибочек', amount: 'Количество: 3', yearOfPurchase: 'Год покупки: 1990', type: 'Форма: фигурка', color: 'Цвет: красный', size: 'Размер: маленький', favorite: 'Любимая: нет' },
        { src: bauble19, name: 'Красно-белый колодец', amount: 'Количество: 3', yearOfPurchase: 'Год покупки: 2000', type: 'Форма: фигурка', color: 'Цвет: красный', size: 'Размер: маленький', favorite: 'Любимая: нет' },
        { src: bauble20, name: 'Желтая звезда', amount: 'Количество: 1', yearOfPurchase: 'Год покупки: 2020', type: 'Форма: звезда', color: 'Цвет: желтый', size: 'Размер: большой', favorite: 'Любимая: нет' },
    ],

    favorites: [],

    favoriteCount: 0,

    tree: [
        { src: tree1 },
        { src: tree2 },
        { src: tree3 },
        { src: tree4 },
        { src: tree5 },
        { src: tree6 },
    ],

    background: [
        { src: background1 },
        { src: background2 },
        { src: background3 },
        { src: background4 },
        { src: background5 },
        { src: background6 },
        { src: background7 },
        { src: background8 },
        { src: background9 },
        { src: background10 },
    ],



    filter: [{
        shape: [
            { src: ball, type: 'Форма: шар'},
            { src: bell, type: 'Форма: колокол'},
            { src: figurine, type: 'Форма: фигурка'},
            { src: pine, type: 'Форма: шишка'},
            { src: snowflake, type: 'Форма: снежинка'},
            { src: star, type: 'Форма: звезда'},
        ],

        colors: [
            { src: white, color: 'Цвет: белый'},
            { src: blue, color: 'Цвет: синий'},
            { src: green, color: 'Цвет: зеленый'},
            { src: red, color: 'Цвет: красный'},
            { src: yellow, color: 'Цвет: желтый'},
        ],

        size: [
            { id: 1, label: 'Размер: большой' },
            { id: 1, label: 'Размер: средний' },
            { id: 1, label: 'Размер: маленький' },
        ],

    }],

}


const baublesSlice = createSlice({
    name: 'baubles',
    initialState,
    reducers: {
        addToFavorites: (state, action) => {
            const item = state.bauble.find(bauble => bauble.src === action.payload.src);
            if (item && !state.favorites.includes(item)) {
                state.favorites.push(item);
                item.favorite = true;
                state.favoriteCount += 1
            }
        },
        removeFromFavorites: (state, action) => {
            state.favorites = state.favorites.filter(el => el.src !== action.payload.src);
            const item = state.bauble.find(bauble => bauble.src === action.payload.src);
            if (item) {
                item.favorite = false;
                state.favoriteCount -= 1
            }
        }
    },
});

export const { addToFavorites, removeFromFavorites } = baublesSlice.actions;
export default baublesSlice.reducer;