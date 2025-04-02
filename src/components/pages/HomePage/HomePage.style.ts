import styled from "styled-components";
import image from '../../icons/mainPage/bg.jpg'; 
import imageBauble from '../../icons/mainPage/1.png';


export const ContainerMainPage = styled.div`
    height: 958px;
    width: 100%;
    background-image: url(${image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    position: relative;
    z-index: 0;
    overflow: hidden;

    &::before,
    &::after {
        content: "";
        background-image: url(${imageBauble});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        position: absolute;
        z-index: -1;
        transform: translateY(0);
    }

    &::before {
        width: 100%;
        height: 550px;
        top: 120px;
        right: 340px;
        min-width: 418px;
    }

    &::after {
        width: 100%;
        min-width: 246px;
        height: 300px;
        top: 120px;
        left: 290px;
    }
`;

export const ContainerForTitle = styled.div`
    width: 593px;
    height: 249px;
    border-radius: 30px;
    background: radial-gradient(circle, #24C5DB00, #24C5DB26);
    border: 2px solid #24C5DB42;
    backdrop-filter: blur(31px);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 126px;
    z-index: 1;
`;

export const Title = styled.h1`
    font-weight: 400;
    font-size: 53px;
    line-height: 58.38px;
    text-align: center;
    color: #ffffff;
`;

export const Button = styled.button`
    border-radius: 30px;
    background: radial-gradient(circle, #24C5DB00, #24C5DB26);
    border: 2px solid #24C5DB42;
    backdrop-filter: blur(31px);
    overflow: hidden;

    width: 320px;
    height: 54px;
    font-weight: 400;
    font-size: 24px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        background: #052d59;
    }
`;