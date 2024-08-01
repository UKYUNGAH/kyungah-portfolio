import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, Routes, Route, useLocation } from 'react-router-dom';

const Header = ({ changeMood }) => {
    const location = useLocation();
    useEffect(() => {
        AOS.init();
    }, []);

    // if (location.pathname === '/Contact') {
    //     return null;
    // }

    return (
        <div className="header">
            <div className="header_wrap" data-aos="fade-down">
                <div className="hl">Publisher - Frontend</div>
                <div className="hm">
                    <button type="button" onClick={changeMood}>
                        change the mood
                    </button>
                </div>
                <div className="hr">
                    <Link to="/Contact">contact</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
