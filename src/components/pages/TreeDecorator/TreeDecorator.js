import React, { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import mute from '../../icons/svg/mute.svg';
import snow from '../../icons/svg/snow.svg';
import { initialState } from '../../store/reducers/GeneralReducer';
import audioMP3 from '../../audio/audio.mp3';
import Snowfall from '../../effects/Snowfall/Snowfall';
import GarlandOverlayWithLights from '../../effects/GarlandOverlayWithLights/GarlandOverlayWithLights';
import useDragAndDrop from '../../effects/Drag&Drop/Drag&Drop';


import {
    Container,
    ContainerForContent,
    DecoratorWrapper,
    ControlSection,
    ButtonMuteImg,
    ButtonSnowImg,
    MuteImg,
    SnowImg,
    TreeSelectionSection,
    TitleForChoosingTree,
    TitleForChoosingBackground,
    TitleForChoosingGarland,
    TreeButtonImgContainer,
    TreeButton,
    TreeImg,
    BackgroundSelectionSection,
    BackgroundButtonImgContainer,
    BackgroundButton,
    BackgroundImg,
    GarlandSelectionSection,
    ColorAndToggleContainer,
    GarlandButtonContainer,
    ButtonColor,
    ToggleButton,
    ToggleText,
    ToggleKnob,
    ButtonSection,
    SaveButton,
    ResetButton,

    ContainerForTree,
    BackgroundImgBasic,
    TreeImgBasic,

    ContainerForCart,
    ContainerForBaubles,
    TitleForBauble,
    CartItemsWrapper,
    TitleForDecoratedTrees,
    CartItem,
    CartItemImage,
    CartItemText,
    DecorationsContainer
}
    from './TreeDecorator.style';

const TreeDecorator = () => {
    const favorites = useSelector(state => state.baubles.favorites);
    const tree = initialState.tree;
    const background = initialState.background;
    const audioRef = useRef(new Audio(audioMP3));
    const colors = ['linear-gradient(90deg, yellow, orange, #e009de, #812fbd)', 'red', 'blue', 'yellow', '#03f403'];

    const [showSnow, setShowSnow] = useState(false);
    const [audioStatus, setAudioStatus] = useState(false);
    const [selectedImage, setSelectedImage] = useState(background[0]);
    const [selectedImageTree, setSelectedImageTree] = useState(tree[0]);
    const [isOn, setIsOn] = useState(false);
    const [garlandColor, setGarlandColor] = useState(null);


    const handleThumbnailClick = (image) => {
        setSelectedImage(image);
    }

    const handleThumbnailTreeClick = (imageTree) => {
        setSelectedImageTree(imageTree);
    }

    const handleGarlandClick = (color) => {
        setGarlandColor(color);
    }

    const handleToggleSnow = () => {
        setShowSnow(!showSnow)
    }

    const startAudio = () => {
        audioRef.current.play();
        setAudioStatus(true);
    }

    const pauseAudio = () => {
        audioRef.current.pause();
        setAudioStatus(false);
    }

    const treeMask = [
        // Вершина
        { x: 345, y: 130 },
        { x: 345, y: 170 },
        // Верхние ветки
        { x: 320, y: 220 }, { x: 370, y: 220 },
        { x: 290, y: 280 }, { x: 400, y: 280 },
        // Основание
        { x: 260, y: 340 }, { x: 420, y: 340 },
        { x: 240, y: 420 }, { x: 440, y: 420 },
        // Основание
        { x: 210, y: 500 }, { x: 475, y: 500 },
        // Основание
        { x: 170, y: 580 }, { x: 500, y: 580 },
        // Низ
        { x: 140, y: 690 }, { x: 210, y: 720 }, { x: 290, y: 740 }, { x: 360, y: 750 }, { x: 420, y: 740 }, { x: 500, y: 720 }, { x: 550, y: 690 },
    ];

    const { decorations, treeRef, handleDragStart, handleDragOver, handleDrop } = useDragAndDrop(treeMask);

    const buttonStyle = {
        background: isOn ? 'rgb(99 156 171)' : '#ccc',
    };

    const textStyle = {
        marginLeft: isOn ? 'auto' : '35px',
        marginRight: isOn ? '45px' : 'auto',
    };

    const knobStyle = {
        transform: isOn ? 'translate(55px, -50%)' : 'translate(0, -50%)',
    };

    const handleClick = () => {
        setIsOn((prevState) => !prevState);
    }


    useEffect(() => {
        const audio = audioRef.current;

        return () => {
            audio.pause();
            audio.currentTime = 0;
        }
    }, [])


    return (
        <Container>
            <Header />
            <ContainerForContent>
                <DecoratorWrapper>
                    <ControlSection>
                        <ButtonMuteImg onClick={audioStatus ? pauseAudio : startAudio}>
                            <MuteImg src={mute} alt={audioStatus ? "pause" : "start"} />
                        </ButtonMuteImg>
                        <ButtonSnowImg onClick={handleToggleSnow}>
                            <SnowImg src={snow} alt="snow" />
                        </ButtonSnowImg>
                    </ControlSection>

                    <TreeSelectionSection>
                        <TitleForChoosingTree>Выберите елку</TitleForChoosingTree>
                        <TreeButtonImgContainer>
                            {tree.map((el, ind) => (
                                <TreeButton key={ind}>
                                    <TreeImg
                                        src={el.src}
                                        alt={el.alt}
                                        onClick={() => handleThumbnailTreeClick(el)}
                                    />
                                </TreeButton>
                            ))}
                        </TreeButtonImgContainer>
                    </TreeSelectionSection>

                    <BackgroundSelectionSection>
                        <TitleForChoosingBackground>Выберите фон</TitleForChoosingBackground>
                        <BackgroundButtonImgContainer>
                            {background.map((el, ind) => (
                                <BackgroundButton key={ind}>
                                    <BackgroundImg
                                        src={el.src}
                                        alt={el.alt}
                                        onClick={() => handleThumbnailClick(el)}
                                    />
                                </BackgroundButton>
                            ))}
                        </BackgroundButtonImgContainer>
                    </BackgroundSelectionSection>

                    <GarlandSelectionSection>
                        <TitleForChoosingGarland>Гирлянда</TitleForChoosingGarland>
                        <ColorAndToggleContainer>
                            <GarlandButtonContainer>
                                {colors.map((color, index) => (
                                    <ButtonColor key={index} color={color} onClick={() => handleGarlandClick(color)} />
                                ))}
                            </GarlandButtonContainer>
                            <ToggleButton style={buttonStyle} onClick={handleClick}>
                                <ToggleText style={textStyle}>{isOn ? "Вкл" : "Выкл"}</ToggleText>
                                <ToggleKnob style={knobStyle} />
                            </ToggleButton>
                        </ColorAndToggleContainer>
                    </GarlandSelectionSection>

                    <ButtonSection>
                        <SaveButton>Сохранить</SaveButton>
                        <ResetButton>Сбросить</ResetButton>
                    </ButtonSection>
                </DecoratorWrapper>



                <ContainerForTree
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                >
                    <BackgroundImgBasic
                        src={selectedImage.src}
                        alt={selectedImage.alt}
                    />
                    <TreeImgBasic
                        ref={treeRef}
                        src={selectedImageTree.src}
                        alt={selectedImageTree.alt}
                    />
                    {/* {treeMask.map((point, index) => (
                        <div
                            key={index}
                            style={{
                                position: "absolute",
                                left: `${point.x}px`,
                                top: `${point.y}px`,
                                width: "10px",
                                height: "10px",
                                backgroundColor: "red",
                                borderRadius: "50%",
                                zIndex: 10,
                            }}
                        />
                    ))} */}

                    <DecorationsContainer ref={treeRef}>
                        {decorations.map((decoration, index) => (
                            <img
                                key={index}
                                src={decoration.src}
                                alt="Decoration"
                                style={{
                                    position: "absolute",
                                    left: `${decoration.x}px`,
                                    top: `${decoration.y}px`,
                                    width: "50px",
                                }}
                            />
                        ))}
                    </DecorationsContainer>
                    <GarlandOverlayWithLights
                        color={garlandColor}
                        isOn={isOn}
                    />
                    {showSnow && <Snowfall />}
                </ContainerForTree>


                <ContainerForCart>
                    <ContainerForBaubles>
                        <TitleForBauble>Игрушки</TitleForBauble>
                        <CartItemsWrapper>
                            {favorites.map((item, index) => (
                                <CartItem key={index}>
                                    <CartItemImage
                                        src={item.src}
                                        alt={item.name}
                                        draggable="true"
                                        onDragStart={(e) => handleDragStart(e, item.src)}
                                    />
                                    <CartItemText>{item.amount.split(": ")[1]}</CartItemText>
                                </CartItem>
                            ))}
                        </CartItemsWrapper>
                    </ContainerForBaubles>


                    <div>
                        <TitleForDecoratedTrees>Вы нарядили</TitleForDecoratedTrees>
                        <div>ImageTrees</div>
                    </div>
                </ContainerForCart>
            </ContainerForContent>
            <Footer />
        </Container>
    );
};

export default TreeDecorator;