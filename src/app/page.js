'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Main from '@/components/Main';
import About from '@/components/About';
import Project from '@/components/Project';
import FinalMessage from '@/components/FinalMessage';
import Footer from '@/components/Footer';
import Lenis from 'lenis';

const colorModes = [
    { background: '#FFECDD', color: '#FA3701', borderColor: '#FA3701', hoverColor: '#de3304' },
    { background: '#3B5B8B', color: '#EEC887', borderColor: '#EEC887', hoverColor: '#ddb97d' },
    { background: '#F299C9', color: '#F14AA4', borderColor: '#F14AA2', hoverColor: '#de4294' },
    { background: '#645C31', color: '#ED96C0', borderColor: '#ED96C0', hoverColor: '#b87595' },
    { background: '#1F6246', color: '#E8B3C3', borderColor: '#E8B3C3', hoverColor: '#cd9dab' },
    { background: '#F3EEE3', color: '#4340A0', borderColor: '#4340A0', hoverColor: '#383585' },
];

export default function Home() {
    const [modeIndex, setModeIndex] = useState(0);

    const changeMood = () => {
        setModeIndex((prevIndex) => (prevIndex + 1) % colorModes.length);
        const root = document.documentElement;

        const newMode = colorModes[(modeIndex + 1) % colorModes.length];
        root.style.setProperty('--background-color', newMode.background);
        root.style.setProperty('--text-color', newMode.color);
        root.style.setProperty('--border-color', newMode.borderColor);
        root.style.setProperty('--hover-color', newMode.hoverColor);
    };

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return (
        <div className="App">
            <div className="wrap">
                <Header changeMood={changeMood} />
                <Main />
                <About />
                <Project />
                <FinalMessage />
                <Footer />
            </div>
        </div>
    );
}
