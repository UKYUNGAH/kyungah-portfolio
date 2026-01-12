'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/navigation';

const Header = ({ changeMood }) => {
    const router = useRouter();

    useEffect(() => {
        AOS.init();
    }, []);

    const handleContactClick = () => {
        router.push('/Contact');
    };

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
                    <button onClick={handleContactClick}>contact</button>
                </div>
            </div>
        </div>
    );
};

export default Header;
