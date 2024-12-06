import React, { useState } from 'react';
import favoriteImg from '../icons/favourite/Screenshot 2024-11-26 at 14.24.52.png';
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
        onUpdateCount 
    }) => {

    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteToggle = () => {
        if (isFavorite) {
            onUpdateCount(-1);
        } else {
            onUpdateCount(1);
        }
        setIsFavorite(!isFavorite);
    };
    
    return (
        <CardContainer>
            <CardHeader>
                <p>{name}</p>
            </CardHeader>
            <ContentSection>
                <CardImageWrapper>
                    <CardImage src={baubleImg} alt="bauble" />
                    <FavoriteButton onClick={() => handleFavoriteToggle()}>
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