import React from 'react';
import { initialState } from '../store/reducers/GeneralReducer'
import {
    Container,
    SectionTitle,
    ShapeFilterContainer,
    ColorFilterContainer,
    SizeFilterContainer,
    AmountFilterContainer,
    SortOptionsContainer,
}
    from './Filtration.style';


const Filtration = ({ onShapeFilter, onColorFilter, onSizeFilter, onAmountFilter, onYearFilter, currentAmount, currentYear, onNameFilter, onResetFilters }) => {    
    const shapeFilter = initialState.filter[0].shape;
    const colorFilter = initialState.filter[0].colors; 
    const sizeFilter = initialState.filter[0].size;

    return (
        <Container>
                <div>
                <SectionTitle>Фильтры по значению</SectionTitle>
                    <div>
                        <ShapeFilterContainer>
                            <p>Форма:</p>
                            {shapeFilter.map((el, ind) => (
                                <button key={ind}>
                                    <img src={el.src} onClick={() => onShapeFilter(el.type)} alt="shape" />
                                </button>
                            ))}
                        </ShapeFilterContainer>
                        
                        <ColorFilterContainer>
                            <p>Цвет:</p>
                            {colorFilter.map((el, ind) => (
                                <button key={ind}>
                                    <img src={el.src} onClick={() => onColorFilter(el.color)} alt="color" />
                                </button>
                            ))}
                        </ColorFilterContainer>
                        <SizeFilterContainer>
                            <p>Размер:</p>
                            {sizeFilter.map((el, ind) => (
                                <label key={ind}>
                                    <input 
                                        type='checkbox' 
                                        onChange={() => onSizeFilter(el.label)} 
                                    />
                                    {el.label}
                                </label>
                            ))}
                        </SizeFilterContainer>
                        <div>
                                <label>
                                    Только любимые
                                    <input type="checkbox" />
                                </label>
                        </div>
                    </div>
                </div>
                <div>
                <SectionTitle>Фильтры по диапазону</SectionTitle>
                    <div>
                        <AmountFilterContainer>
                            <p>Количество экземпляров:</p>
                            <div>
                            <label htmlFor="amount">{currentAmount}</label>
                                <input 
                                    type="range"
                                    onChange={(e) => onAmountFilter(Number(e.target.value))}
                                    id="amount" min="1" max="12"
                                />
                                <label htmlFor="amount">12</label>
                            </div>
                        </AmountFilterContainer>

                        <div>
                            <p>Год приобретения:</p>
                            <div>
                            <label htmlFor="year">{currentYear}</label>
                                <input 
                                    type="range"
                                    onChange={(e) => onYearFilter(Number(e.target.value))} 
                                    
                                    id="year" 
                                    min="1940" 
                                    max="2020" 
                                />
                                <label htmlFor="year">2020</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                <SectionTitle>Сортировка</SectionTitle>
                    <div>
                    <SortOptionsContainer>
                        <select onChange={onNameFilter}>
                            <option value="name">По названию от "А" до "Я"</option>
                            <option value="year">По году от 1940 до 2020</option>
                        </select>
                    </SortOptionsContainer>
                        <div>
                            <button onClick={() => onResetFilters()}>Сброс фильтров</button>
                        </div>
                        
                    </div>
                </div>
        </Container>
    );
};

export default Filtration;