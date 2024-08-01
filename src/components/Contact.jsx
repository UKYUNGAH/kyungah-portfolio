import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="contact">
            <div className="container">
                <div className="wrap">
                    <div className="left">
                        <h3>lorem lorem</h3>
                        <h2>CONTECT</h2>
                        <div className="l_top">
                            <h4>유경아</h4>
                            <h4>ukyunga0.1@gmail.com</h4>
                            <h4>(+ 82) 010 - 7794 - 2702</h4>
                        </div>
                        <div className="l_bottom">
                            <h4>사용가능 기술</h4>
                            <div className="skil_box">
                                <span>HTML 5</span>
                                <span>CSS</span>
                                <span>Javascript</span>
                                <span>React</span>
                                <span>Next</span>
                                <span>MongoDB</span>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="list_box">
                            <h5>FIND OUT MORE</h5>
                            <Link to="/">깃허브 바로가기</Link>
                        </div>
                        <div className="list_box">
                            <h5>PROFILE</h5>
                            <Link to="/">서핏 프로필 바로가기</Link>
                        </div>
                        <div className="text_box">더많은 피드백~~~~~~</div>
                    </div>
                    <button>X</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;
