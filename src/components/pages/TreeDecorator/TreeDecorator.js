import React, { useRef, useState, useEffect } from 'react';
import Header from '../../Header/Header';
import mute from '../../icons/svg/mute.svg';
import snow from '../../icons/svg/snow.svg';
import { initialState } from '../../store/reducers/GeneralReducer';
import audioMP3 from '../../audio/audio.mp3';
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
    GarlandButtonImgContainer,
    GarlandImg,
    ButtonSection,
    SaveButton,
    ResetButton,

    BackgroundImgBasic
}
    from './TreeDecorator.style';

const TreeDecorator = () => {
    const tree = initialState.tree;
    const background = initialState.background;
    const garland = initialState.garland;
    const audioRef = useRef(new Audio(audioMP3));

    const [audioStatus, setAudioStatus] = useState(false);
    const [selectedImage, setSelectedImage] = useState(background[0]);


    const handleThumbnailClick = (image) => {
        setSelectedImage(image);
    }


    const startAudio = () => {
        audioRef.current.play();
        setAudioStatus(true);
    }

    const pauseAudio = () => {
        audioRef.current.pause();
        setAudioStatus(false);
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
                        <ButtonSnowImg>
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
                        <GarlandButtonImgContainer>
                            {garland.map((el, ind) => (
                                <button key={ind}>
                                    <GarlandImg
                                        src={el.src}
                                        alt={el.alt}
                                    />
                                </button>
                            ))}
                        </GarlandButtonImgContainer>
                    </GarlandSelectionSection>

                    <ButtonSection>
                        <SaveButton>Сохранить</SaveButton>
                        <ResetButton>Сбросить</ResetButton>
                    </ButtonSection>
                </DecoratorWrapper>



                <div>
                    <BackgroundImgBasic
                        src={selectedImage.src}
                        alt={selectedImage.alt}
                    />
                </div>

                <div>
                    <div>empty</div>
                </div>
            </ContainerForContent>
        </Container>
    );
};

export default TreeDecorator;