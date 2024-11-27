import React from 'react';
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


const BaubleCard = ({ name, baubleImg, amount, yearOfPurchase, type, colour, size, favorite }) => {
    return (
        <CardContainer>
            <CardHeader>
                <p>{name}</p>
            </CardHeader>
            <ContentSection>
                <CardImageWrapper>
                    <CardImage src={baubleImg} alt="bauble" />
                    <FavoriteButton>
                        <FavoriteIcon src={favoriteImg} alt="favorite" />
                    </FavoriteButton>
                </CardImageWrapper>

                <CardDetails>
                    <DetailItem>{amount}</DetailItem>
                    <DetailItem>{yearOfPurchase}</DetailItem>
                    <DetailItem>{type}</DetailItem>
                    <DetailItem>{colour}</DetailItem>
                    <DetailItem>{size}</DetailItem>
                    <DetailItem>{favorite}</DetailItem>
                </CardDetails>
            </ContentSection>
        </CardContainer>
    );
};

export default BaubleCard;