import React from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className="main">
            <div className="container main_wrap">
                <div className="title">
                    <h1>Kyungah Portfolio</h1>
                </div>
                <div className="bottom">
                    <div className="text">
                        <p>
                            사용자 경험을 중시하는 <br /> 개발자가 되기위해 노력하는
                            <br /> 유경아 입니다.
                        </p>
                        <Link to="https://my.surfit.io/w/989694903">&#123; 이력서보러가기 &#125;</Link>
                    </div>
                    <div className="update">update 2024.07</div>
                </div>
            </div>
        </div>
    );
};

export default Main;
