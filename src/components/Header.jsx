import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = ({ changeMood }) => {
    useEffect(() => {
        AOS.init();
    }, []);

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
                    <button>contact</button>
                </div>
            </div>
        </div>
    );
};

export default Header;
