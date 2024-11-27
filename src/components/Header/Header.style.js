import styled from "styled-components";

export const HeaderContainer = styled.div`
    margin-bottom: 50px;
    margin-top: 30px;
`;

export const Button = styled.button`
    border-radius: 20px;
    max-width: 250px;
    width: 100%;
    height: 84px;
    background: #007BFF;
    font-weight: 700;
    font-size: 30px;
    line-height: 247%;
    text-align: center;
    color: #fff;
    cursor: pointer;
    transition: background 0.3s;
    margin-left: 50px;

    &:hover {
        background: #052d59;
    }
`;