import styled, { keyframes } from "styled-components";

export const blink = keyframes`
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
`;

export const GarlandLight = styled.div<{ $delay: string }>`
    position: absolute;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: ${({ color }) => color || "red"};
    animation: ${blink} 1s infinite;
    animation-delay: ${({ $delay }) => $delay || "0s"};
    box-shadow: 0 0 30px 5px yellow;
`;

export const GarlandOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
`;