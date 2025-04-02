// @ts-ignore
import React from "react";
import {
    GarlandLight,
    GarlandOverlay,
}
    from './GarlandOverlayWithLights.style';


const GarlandOverlayWithLights = ({ color = "red", isOn }) => {
    const lights = [
        { top: "19%", left: "49%", delay: "0s" },
        // Уровень 1
        { top: "25%", left: "46%", delay: "0.2s" },
        { top: "25%", left: "52%", delay: "0.4s" },
        // Уровень 2
        { top: "30%", left: "43%", delay: "0.6s" },
        { top: "30%", left: "54%", delay: "0.8s" },
        { top: "31%", left: "49%", delay: "1s" },
        // Уровень 3
        { top: "37%", left: "41%", delay: "1.2s" },
        { top: "37%", left: "57%", delay: "1.4s" },
        { top: "38%", left: "46%", delay: "1.6s" },
        { top: "38%", left: "51%", delay: "1.8s" },
        // Уровень 4
        { top: "44%", left: "38%", delay: "0s" },
        { top: "44%", left: "59%", delay: "0.2s" },
        { top: "45%", left: "43%", delay: "0.4s" },
        { top: "45%", left: "53%", delay: "0.6s" },
        { top: "46%", left: "48%", delay: "0.8s" },
        // Уровень 5
        { top: "51%", left: "35%", delay: "1s" },
        { top: "51%", left: "61%", delay: "1.2s" },
        { top: "53%", left: "41%", delay: "1.4s" },
        { top: "53%", left: "55%", delay: "1.6s" },
        { top: "54%", left: "48%", delay: "1.8s" },
        // Уровень 6
        { top: "58%", left: "31%", delay: "0s" },
        { top: "58%", left: "65%", delay: "0.2s" },
        { top: "60%", left: "39%", delay: "0.4s" },
        { top: "60%", left: "58%", delay: "0.6s" },
        { top: "61%", left: "48%", delay: "0.8s" },
        // Основание
        { top: "64%", left: "29%", delay: "1s" },
        { top: "64%", left: "68%", delay: "1.2s" },
        { top: "68%", left: "37%", delay: "1.4s" },
        { top: "68%", left: "60%", delay: "1.6s" },
        { top: "70%", left: "48%", delay: "1.8s" },

        // Продолжение ниже ёлки
        { top: "72%", left: "25%", delay: "0s" },
        { top: "72%", left: "70%", delay: "0.2s" },
        { top: "75%", left: "35%", delay: "0.4s" },
        { top: "75%", left: "61%", delay: "0.6s" },
        { top: "78%", left: "48%", delay: "0.8s" },

        { top: "80%", left: "22%", delay: "1s" },
        { top: "80%", left: "74%", delay: "1.2s" },
        { top: "83%", left: "33%", delay: "1.4s" },
        { top: "83%", left: "63%", delay: "1.6s" },
        { top: "86%", left: "48%", delay: "1.8s" },

        { top: "86%", left: "18%", delay: "0s" },
        { top: "86%", left: "79%", delay: "0.2s" },
        { top: "92%", left: "48%", delay: "0.4s" },
        { top: "91%", left: "31%", delay: "0.6s" },
        { top: "91%", left: "65%", delay: "0.8s" },
    ];


    if (!isOn) return null;

    return (
        <GarlandOverlay>
            {lights.map((light, index) => (
                <GarlandLight
                    key={index}
                    color={color}
                    style={{ top: light.top, left: light.left }}
                    $delay={light.delay}
                />
            ))}
        </GarlandOverlay>
    );
};

export default GarlandOverlayWithLights;