import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`;

export const ContainerForContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0 80px;
    background-color: #192F2D;
    color: white;
`;

export const DecoratorWrapper = styled.div`
    flex: 0 0 27%;
`;

export const ControlSection = styled.div`
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 10px;
`;

export const ButtonMuteImg = styled.button`
`;

export const ButtonSnowImg = styled.button`
`;

export const MuteImg = styled.img`
    width: 40px;
    height: 40px;
`;

export const SnowImg = styled.img`
    width: 40px;
    height: 40px;
`;

export const TreeSelectionSection = styled.div`
    margin-bottom: 25px;
`;

export const TitleForChoosingTree = styled.h5`
    font-size: 30px;
    text-align: center;
    margin-bottom: 10px;
`;

export const TitleForChoosingBackground = styled.h5`
    font-size: 30px;
    text-align: center;
    margin-bottom: 10px;
`;

export const TitleForChoosingGarland = styled.h5`
    font-size: 30px;
    text-align: center;
    margin-bottom: 10px;
`;

export const TreeButtonImgContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 16px;
`;

export const TreeImg = styled.img`
    width: 91px;
    height: 120px;
`;

export const TreeButton = styled.button`
    width: calc(33.33% - 10.66px);
    max-width: 134px;
`;

export const BackgroundSelectionSection = styled.div`
    margin-bottom: 25px;
`;

export const BackgroundButtonImgContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 16px;
`;

export const BackgroundButton = styled.button`
    
`;

export const BackgroundImg = styled.img`
    max-width: 68px;
    height: 68px;
`;

export const GarlandSelectionSection = styled.div`
    margin-bottom: 25px;
`;

export const ColorAndToggleContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const GarlandButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const ButtonColor = styled.button`
    width: 30px;
    height: 30px;
    background: ${(props) => props.color || "gray"};
    border-radius: 50%;
    border: 1px solid;
    cursor: pointer;
    text-align: center;
    display: inline-block;
    transition: transform 0.3s, box-shadow 0.3s;
    box-shadow: 0 0 15px 3px ${(props) => props.color || "rgba(0, 0, 0, 0.25)"};

    &:hover {
        transform: scale(1.1);
        box-shadow: 0 0 20px 5px ${(props) => props.color || "rgba(0, 0, 0, 0.35)"};
    }
`;

export const ButtonSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

export const ToggleButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    width: 95px;
    height: 35px;
    background: #ccc;
    border-radius: 30px;
    padding: 5px;
    cursor: pointer;
    border: none;
    transition: background 0.3s ease;
    position: relative;
    outline: none;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);

    &:focus {
        box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.5);
    }
`;

export const ToggleText = styled.span`
    font-size: 20px;
    color: white;
    font-weight: bold;
    transition: margin 0.3s ease;
`;

export const ToggleKnob = styled.div`
    width: 30px;
    height: 30px;
    background: white;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transition: transform 0.3s ease;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transform: translate(0, -50%);
`;

export const SaveButton = styled.button`
    border-radius: 20px;
    max-width: 150px;
    width: 100%;
    height: 50px;
    background: #2d5d20;
    font-weight: 700;
    font-size: 20px;
    line-height: 247%;
    text-align: center;
    color: #fff;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        background: #4b8b3a;
    }
`;

export const ResetButton = styled.button`
    border-radius: 20px;
    max-width: 150px;
    width: 100%;
    height: 50px;
    background: #2d5d20;
    font-weight: 700;
    font-size: 20px;
    line-height: 247%;
    text-align: center;
    color: #fff;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        background: #4b8b3a;
    }
`;


export const ContainerForTree = styled.div`
    position: relative;
    margin-right: 20px;
    margin-left: 20px;
`;

export const BackgroundImgBasic = styled.img`
    max-width: 700px;
    min-height: 860px;
`;

export const TreeImgBasic = styled.img`
    position: absolute;
    top: 56%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 500px;
    min-height: 660px;
`;

export const ContainerForCart = styled.div`
    flex: 0 0 20%;
`;

export const ContainerForBaubles = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 510px;
`;

export const TitleForBauble = styled.h5`
    font-size: 30px;
    text-align: center;
    margin-bottom: 10px;
    margin-top: 10px;
`;

export const TitleForDecoratedTrees = styled.h5`
    font-size: 30px;
    text-align: center;
    margin-bottom: 10px;
`;

export const CartItemsWrapper = styled.div`
    display: flex;
    gap: 8px;
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const CartItem = styled.div`
    width: calc(25% - 8px); /* 25% ширины с учетом gap */
    height: 80px;
    max-width: 80px;
    border-radius: 10px;
    border: 1px solid #ccc;
    background: radial-gradient(109.56% 109.56% at 0% -2.94%, rgba(255, 255, 255, 0.5) 0%, rgba(179, 246, 255, 0.5) 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CartItemImage = styled.img`
    height: 60px;
    position: absolute; 
    cursor: grab;       
    user-select: none;
`;

export const CartItemText = styled.p`
    width: 22px;
    height: 19px;
    border-radius: 50%;
    background: #24C5DB;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 17px;
    position: absolute;
    bottom: 1px;
    right: 1px;
`;

export const DecorationsContainer = styled.div`
    position: absolute;
    top: 56%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 660px;
    pointer-events: none;
`;