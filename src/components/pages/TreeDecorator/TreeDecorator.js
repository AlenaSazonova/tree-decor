import React, { useRef, useState, useEffect } from 'react';
import Header from '../../Header/Header';
import mute from '../../icons/svg/mute.svg';
import snow from '../../icons/svg/snow.svg';
import { initialState } from '../../store/reducers/GeneralReducer';
import audioMP3 from '../../audio/audio.mp3';
import Snowfall from '../../effects/Snowfall';
import GarlandOverlayWithLights from '../../effects/GarlandOverlayWithLights/GarlandOverlayWithLights';


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
    TreeButtonImgContainer,
    TreeButton,
    TreeImg,
    BackgroundSelectionSection,
    BackgroundButtonImgContainer,
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

    BackgroundImgBasic,
    TreeImgBasic,
}
    from './TreeDecorator.style';

const TreeDecorator = () => {
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
                        <h5>Выберите елку</h5>
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
                        <h5>Выберите фон</h5>
                        <BackgroundButtonImgContainer>
                            {background.map((el, ind) => (
                                <button key={ind}>
                                    <BackgroundImg
                                        src={el.src}
                                        alt={el.alt}
                                        onClick={() => handleThumbnailClick(el)}
                                    />
                                </button>
                            ))}
                        </BackgroundButtonImgContainer>
                    </BackgroundSelectionSection>

                    <GarlandSelectionSection>
                        <h5>Гирлянда</h5>
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







                <div style={{ position: "relative" }}>
                    <BackgroundImgBasic
                        src={selectedImage.src}
                        alt={selectedImage.alt}
                    />
                    <TreeImgBasic
                        src={selectedImageTree.src}
                        alt={selectedImageTree.alt}
                        style={{
                            
                        }}
                    />
                    <GarlandOverlayWithLights 
                        color={garlandColor} 
                        isOn={isOn} 
                    />
                    {showSnow && <Snowfall />}
                </div>

                <div>
                    <div>Игрушки</div>
                    <div>Вы нарядили</div>
                </div>
            </ContainerForContent>
        </Container>
    );
};

export default TreeDecorator;