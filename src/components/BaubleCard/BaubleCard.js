import React from 'react';
import favoriteImg from '../icons/favourite/Screenshot 2024-11-26 at 14.24.52.png';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../store/reducers/GeneralReducer';

import {
    CardContainer, 
    CardHeader,
    ContentSection,
    CardImageWrapper,
    CardImage,
    FavoriteButton,
    FavoriteIcon,
    CardDetails,
    DetailItem,
}
    from './BaubleCard.style';


const BaubleCard = ({ 
        name, 
        baubleImg, 
        amount, 
        yearOfPurchase, 
        type, 
        color, 
        size, 
        favorite, 
        onFavoriteChange
    }) => {

    const dispatch = useDispatch(); 
    const favorites = useSelector((state) => state.baubles.favorites);
    const isFavorite = favorites.some((el => el.name === name));


    const handleFavoriteToggle = () => {
        const newIsFavorite = !isFavorite;

        if (newIsFavorite) {
            dispatch(addToFavorites({ src: baubleImg, amount }))
        } else {
            dispatch(removeFromFavorites({ src: baubleImg, amount }))
        }
        onFavoriteChange(name, newIsFavorite);
    };
    
    return (
        <CardContainer>
            <CardHeader>
                <p>{name}</p>
            </CardHeader>
            <ContentSection>
                <CardImageWrapper>
                    <CardImage src={baubleImg} alt="bauble" />
                    <FavoriteButton onClick={handleFavoriteToggle}>
                        <FavoriteIcon src={favoriteImg} alt="favorite" />
                    </FavoriteButton>
                </CardImageWrapper>

                <CardDetails>
                    <DetailItem>{amount}</DetailItem>
                    <DetailItem>{yearOfPurchase}</DetailItem>
                    <DetailItem>{type}</DetailItem>
                    <DetailItem>{color}</DetailItem>
                    <DetailItem>{size}</DetailItem>
                    <DetailItem>{favorite}</DetailItem>
                </CardDetails>
            </ContentSection>
        </CardContainer>
    );
};

export default BaubleCard;