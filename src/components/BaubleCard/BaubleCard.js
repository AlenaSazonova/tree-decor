import React, { useContext } from 'react';
import favoriteImg from '../icons/favourite/Screenshot 2024-11-26 at 14.24.52.png';
import { CartContext } from '../context/CartContext';

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
        onUpdateCount,
        onFavoriteChange
    }) => {

    const { addToCart } = useContext(CartContext);
    const { removeFromCart } = useContext(CartContext);

    const handleFavoriteToggle = () => {
        let isFavorite;
        if (favorite === 'Любимая: да') {
            isFavorite = false;
            onUpdateCount(-1);
            removeFromCart({ src: baubleImg, name, amount }); 
        } else {
            isFavorite = true;
            onUpdateCount(1);

            addToCart({ src: baubleImg, name, amount });
        }
        onFavoriteChange(name, isFavorite);
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