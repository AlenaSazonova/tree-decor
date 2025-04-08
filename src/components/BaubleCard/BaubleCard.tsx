import React, { useState } from 'react';
import favoriteImg from '../icons/favourite/Screenshot 2024-11-26 at 14.24.52.png';
import { useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites, Bauble } from '../store/reducers/GeneralReducer';

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


interface BaubleCardProps {
    name: string;
    baubleImg: string;
    amount: string;
    yearOfPurchase: string;
    type: string;
    color: string;
    size: string;
    favorite: string;
    onFavoriteChange: (name: string, isFavorite: boolean) => void;
}


const BaubleCard: React.FC<BaubleCardProps> = ({ 
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
    const [isFavorite, setIsFavorite] = useState<boolean>(favorite === "Любимая: да");


    const handleFavoriteToggle = () => {
        const newFavoriteStatus = !isFavorite;
        setIsFavorite(newFavoriteStatus);

        const bauble: Bauble = {
            name,
            src: baubleImg,
            amount,
            yearOfPurchase,
            type,
            color,
            size,
            favorite: newFavoriteStatus ? "Любимая: да" : "Любимая: нет"
        };

        if (newFavoriteStatus) {
            dispatch(addToFavorites(bauble));
        } else {
            dispatch(removeFromFavorites(bauble));
        }    
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
                    <DetailItem>{isFavorite ? "Любимая: да" : "Любимая: нет"}</DetailItem>
                </CardDetails>
            </ContentSection>
        </CardContainer>
    );
};

export default BaubleCard;