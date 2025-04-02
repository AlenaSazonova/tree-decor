// @ts-ignore
import React, { useEffect, useState } from 'react';
import {
    SnowfallContainer,
    SnowflakesContainer,
    Snowflake
}
    from './Snowfall.style';

const Snowfall = () => {
    const [snowflakes, setSnowflakes] = useState([]);

    useEffect(() => {
        const numberOfSnowflakes = 100;
        const newSnowflakes = [];

        for (let i = 0; i < numberOfSnowflakes; i++) {
            newSnowflakes.push({
                id: Math.random(),
                left: Math.random() * 100,
                delay: Math.random() * 5,
                duration: Math.random() * 5 + 5,
            });
        }

        setSnowflakes(newSnowflakes);
    }, []);

    return (
        <SnowfallContainer>
            <SnowflakesContainer>
                {snowflakes.map((flake) => (
                    <Snowflake
                        key={flake.id}
                        style={{
                            left: `${flake.left}%`,
                            animationDelay: `${flake.delay}s`,
                            animationDuration: `${flake.duration}s`,
                        }}
                    >
                        ❄
                    </Snowflake>
                ))}
            </SnowflakesContainer>
        </SnowfallContainer>
    );
};

export default Snowfall;