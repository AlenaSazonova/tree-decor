import styled, { keyframes } from "styled-components";

const fall = keyframes`
    0% {
        transform: translateY(15vh);
        opacity: 1;
    }
    100% {
        transform: translateY(100vh); //Падение до конца экрана
        opacity: 0;
    }
`;

export const SnowfallContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
    z-index: 1000;
`;

export const SnowflakesContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
`;

export const Snowflake = styled.div`
    position: absolute;
    top: -20vh;
    font-size: 1.5rem;
    color: white;
    opacity: 1;
    animation: ${fall} linear infinite;

  // Для четных снежинок
    &:nth-child(even) {
        font-size: 2rem;
        animation-duration: 8s;
        animation-timing-function: ease-in-out;
    }

  // Для нечетных снежинок
    &:nth-child(odd) {
        font-size: 1.5rem;
        animation-duration: 5s;
        animation-timing-function: ease-out;
    }
`;