import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Lenis from 'lenis';
import { Routes, Route, useLocation } from 'react-router-dom';

const colorModes = [
    { background: '#FFECDD', color: '#FA3701', borderColor: '#FA3701' },
    { background: '#3B5B8B', color: '#EEC887', borderColor: '#EEC887' },
    { background: '#F299C9', color: '#F14AA4', borderColor: '#F14AA2' },
    { background: '#645C31', color: '#ED96C0', borderColor: '#ED96C0' },
    { background: '#1F6246', color: '#E8B3C3', borderColor: '#E8B3C3' },
    { background: '#F3EEE3', color: '#4340A0', borderColor: '#4340A0' },
];

function App() {
    const [modeIndex, setModeIndex] = useState(0);
    const location = useLocation();

    const changeMood = () => {
        setModeIndex((prevIndex) => (prevIndex + 1) % colorModes.length);
        const root = document.documentElement;

        const newMode = colorModes[(modeIndex + 1) % colorModes.length];
        root.style.setProperty('--background-color', newMode.background);
        root.style.setProperty('--text-color', newMode.color);
        root.style.setProperty('--border-color', newMode.borderColor);
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
                {location.pathname !== '/Contact' && <Header changeMood={changeMood} />}
                {location.pathname !== '/Contact' && <Main data-aos="fade-up" />}
                {location.pathname !== '/Contact' && <About />}
                {location.pathname !== '/Contact' && <Project />}

                <Routes>
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
