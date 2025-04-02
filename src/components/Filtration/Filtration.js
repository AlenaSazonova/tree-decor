// @ts-ignore
import React from 'react';
import { initialState } from '../store/reducers/GeneralReducer'
import {
    Container,
    SectionTitle,
    ValueFilter,
    RangeFilter,
    SortFilter,
    ShapeFilterContainer,
    ContainerForShapeButtonAndImg,
    ContainerForColorButtonAndImg,
    ShapeButton,
    ColorFilterContainer,
    SizeFilterContainer,
    InputForCheckbox,
    ContainerForSizeCheckbox,
    AmountFilterContainer,
    TitleYearOfPurchase,
    YearInput,
    AmountTitle,
    InputAmount,
    SortOptionsContainer,
    SortSelect,
    ResetContainer,
    ResetButton,
}
    from './Filtration.style';


const Filtration = ({ onShapeFilter, onColorFilter, onSizeFilter, onAmountFilter, onYearFilter, currentAmount, currentYear, onNameFilter, onFavoriteFilter, onResetFilters, selectedSize, isFavoriteChecked }) => {    
    const shapeFilter = initialState.filter[0].shape;
    const colorFilter = initialState.filter[0].colors; 
    const sizeFilter = initialState.filter[0].size;

    return (
        <Container>
                
                    <ValueFilter>
                    <SectionTitle>Фильтры по значению</SectionTitle>
                        <ShapeFilterContainer>
                            <p>Форма:</p>
                            <ContainerForShapeButtonAndImg>
                        {shapeFilter.map((el, ind) => (
                            <ShapeButton key={ind}>
                                <img src={el.src} onClick={() => onShapeFilter(el.type)} alt="shape" />
                            </ShapeButton>
                        ))}
                            </ContainerForShapeButtonAndImg>
                            
                        </ShapeFilterContainer>
                        
                        <ColorFilterContainer>
                            <p>Цвет:</p>
                    <ContainerForColorButtonAndImg>
                        {colorFilter.map((el, ind) => (
                            <button key={ind}>
                                <img src={el.src} onClick={() => onColorFilter(el.color)} alt="color" />
                            </button>
                        ))}
                    </ContainerForColorButtonAndImg>
                            
                        </ColorFilterContainer>
                        <SizeFilterContainer>
                            <p>Размер:</p>
                            <ContainerForSizeCheckbox>
                        {sizeFilter.map((el, ind) => (
                            <label key={ind}>
                                <input
                                    type='checkbox'
                                    checked={selectedSize.includes(el.label)}
                                    onChange={() => onSizeFilter(el.label)}
                                />
                                {el.label}
                            </label>
                        ))}
                            </ContainerForSizeCheckbox>
                            
                        </SizeFilterContainer>
                        <div>
                                <label>
                                    Только любимые
                                    <InputForCheckbox 
                                        type="checkbox" 
                                        checked={isFavoriteChecked}
                                        onChange={(e) => onFavoriteFilter(e.target.checked)}
                                    />
                                </label>
                        </div>
                    </ValueFilter>
                
                
                
                    <RangeFilter>
                    <SectionTitle>Фильтры по диапазону</SectionTitle>
                        <AmountFilterContainer>
                    <AmountTitle>Количество экземпляров:</AmountTitle>
                            <div>
                            <label htmlFor="amount">{currentAmount}</label>
                        <InputAmount 
                                    type="range"
                                    value={currentAmount}
                                    onChange={(e) => onAmountFilter(Number(e.target.value))}
                                    id="amount" min="1" max="12"
                                />
                                <label htmlFor="amount">12</label>
                            </div>
                        </AmountFilterContainer>

                        <div>
                    <TitleYearOfPurchase>Год приобретения:</TitleYearOfPurchase>
                            <div>
                            <label htmlFor="year">{currentYear}</label>
                                <YearInput 
                                    type="range"
                                    value={currentYear}
                                    onChange={(e) => onYearFilter(Number(e.target.value))} 
                                    id="year" 
                                    min="1940" 
                                    max="2020" 
                                />
                                <label htmlFor="year">2020</label>
                            </div>
                        </div>
                    </RangeFilter>
                
                
                
                <SortFilter>
                    <SectionTitle>Сортировка</SectionTitle>
                    <SortOptionsContainer>
                        <SortSelect onChange={onNameFilter}>
                            <option value="name">По названию от "А" до "Я"</option>
                            <option value="year">По году от 1940 до 2020</option>
                        </SortSelect>
                    </SortOptionsContainer>
                        <ResetContainer>
                            <ResetButton onClick={() => onResetFilters()}>Сброс фильтров</ResetButton>
                        </ResetContainer>
                        
                </SortFilter>
                
        </Container>
    );
};

export default Filtration;