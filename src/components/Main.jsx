import React, { useEffect } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {
    useEffect(() => {
        AOS.init({
            once: false,
        });
    }, []);
    return (
        <div className="main">
            <div className="container main_wrap">
                <div className="title" data-aos="fade-up" data-aos-delay="500">
                    <h1>Kyungah Portfolio</h1>
                </div>
                <div className="bottom" data-aos="fade-up" data-aos-delay="900">
                    <div className="text">
                        <p>
                            사용자 경험을 중시하는 <br /> 개발자가 되기위해 노력하는
                            <br /> 유경아 입니다.
                        </p>
                        <Link to="https://my.surfit.io/w/989694903">
                            &#123; <span>이력서보러가기</span> &#125;
                        </Link>
                    </div>
                    <div className="update">update 2024.08</div>
                </div>
            </div>
        </div>
    );
};

export default Main;
