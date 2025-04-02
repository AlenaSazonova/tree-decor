import styled from "styled-components";

export const HeaderContainer = styled.div`
    padding-bottom: 20px;
    padding-top: 20px;
    background-color: #192F2D;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Navigation = styled.nav`
    display: flex;
`;

export const Button = styled.button`
    border-radius: 20px;
    min-width: 250px;
    width: 100%;
    height: 84px;
    background: #192F2D;
    font-weight: 700;
    font-size: 30px;
    line-height: 247%;
    text-align: center;
    color: #fff;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        background: #052d59;
    }
`;

export const InfoWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 60px;
`;

export const Image = styled.img`
    width: 100%;
    height: auto;
`;

export const AmountText = styled.div`
    position: absolute;
    top: 50%;
    left: 56%;
    transform: translate(-50%, -50%);
    color: white;
    padding: 10px 6px;
    text-align: center;
    font-size: 16px;
    margin-top: 7px;
`;