import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';

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

    const changeMood = () => {
        setModeIndex((prevIndex) => (prevIndex + 1) % colorModes.length);
        const root = document.documentElement;

        const newMode = colorModes[(modeIndex + 1) % colorModes.length];
        root.style.setProperty('--background-color', newMode.background);
        root.style.setProperty('--text-color', newMode.color);
        root.style.setProperty('--border-color', newMode.borderColor);
    };

    return (
        <div className="App">
            <div className="wrap">
                <Header changeMood={changeMood} />
                <Main />
                <About />
            </div>
        </div>
    );
}

export default App;
