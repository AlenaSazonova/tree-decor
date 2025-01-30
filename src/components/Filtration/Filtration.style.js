import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    background-color: #192F2D;
    justify-content: space-between;
    color: white;
    flex-wrap: wrap;
    width: 100%;
    padding-bottom: 30px;
    padding-left: 20px;
    padding-right: 20px;
`;

export const SectionTitle = styled.h4`
    font-size: 30px;
    text-align: center;
    margin-bottom: 30px;
`;

export const ValueFilter = styled.div`
    background: radial-gradient(circle, #B3F6FF80 0%, #1A596680 100%);
    border-radius: 7%;
    width: 100%;
    max-width: 430px;
    padding: 20px;

`;

export const RangeFilter = styled.div`
    background: radial-gradient(circle, #B3F6FF80 0%, #1A596680 100%);
    border-radius: 7%;
    width: 100%;
    max-width: 490px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;    
    align-items: center;
`;

export const SortFilter = styled.div`
    background: radial-gradient(circle, #B3F6FF80 0%, #1A596680 100%);
    border-radius: 7%;
    width: 100%;
    max-width: 430px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const ShapeFilterContainer = styled.div`
    margin-bottom: 20px;
`;

export const ContainerForShapeButtonAndImg = styled.div`
    display: flex;
`;

export const ContainerForColorButtonAndImg = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const ShapeButton = styled.button`
    background: transparent;
`;

export const ColorFilterContainer = styled.div`
    margin-bottom: 30px;
`;

export const SizeFilterContainer = styled.div`
    margin-bottom: 30px;
`;

export const InputForCheckbox = styled.input`
    margin-left: 10px;
`;

export const ContainerForSizeCheckbox = styled.div`
    display: flex;
`;

export const AmountFilterContainer = styled.div`
    margin-bottom: 30px;
`;

export const AmountTitle = styled.p`
    margin-bottom: 30px;
`;

export const InputAmount = styled.input`
    width: 400px;
`;

export const TitleYearOfPurchase = styled.p`
    margin-bottom: 30px;
`;

export const YearInput = styled.input`
    width: 340px;
`;

export const SortOptionsContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: -80px;
`;


export const SortSelect = styled.select`
    font-size: 25px;
    background: radial-gradient(circle, #B3F6FF80 0%, #1A596680 100%);
    border: 1px solid #24C5DB;
    border-radius: 10px;
    border-radius: 10px;
    padding: 20px 25px;
`;


export const ResetContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const ResetButton = styled.button`
    font-size: 25px;
    background: radial-gradient(circle, #B3F6FF80 0%, #1A596680 100%);
    border: 1px solid #24C5DB;
    border-radius: 10px;
    padding: 15px 45px;
    font-size: 30px;
`;
