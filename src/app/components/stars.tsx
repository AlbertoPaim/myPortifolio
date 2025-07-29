"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export const StarBackground = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <Particles className=" "
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: { enable: true, zIndex: -10 },
                background: { color: "black" },
                particles: {
                    number: { value: 120, density: { enable: true, area: 800 } },
                    color: { value: "#ffffff" },
                    shape: { type: "circle" },
                    opacity: {
                        value: 0.7,
                        random: true,
                    },
                    size: {
                        value: 1.5,
                        random: true,
                    },
                    move: {
                        enable: true,
                        speed: 3.5,
                        direction: "bottom",
                        straight: true,
                        outModes: { default: "out" },
                    },

                    twinkle: {
                        particles: {
                            enable: true,
                            frequency: 1,
                            opacity: 0.5,
                        },
                    },
                },
                detectRetina: true,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                    },
                    modes: {
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                    },
                },
                emitters: {
                    direction: "top",
                    rate: {
                        delay: 5,
                        quantity: 1,
                    },
                    size: {
                        width: 0,
                        height: 0,
                    },
                    position: {
                        x: 50,
                        y: 100,
                    },
                },
            }}
        />
    );
};
