import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Contact = () => {
    const textBoxRef = useRef();

    useEffect(() => {
        gsap.to(textBoxRef.current, {
            clipPath: 'circle(100% at 50% 50%)',
            duration: 0.1,
            ease: 'power2.inOut',
        });
    }, []);
    return (
        <div className="contact">
            <div className="container">
                <div className="wrap">
                    <div className="left">
                        <h3>Let’s connect</h3>
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
                        <div className="right_top">
                            <div className="list_box">
                                <h5>FIND OUT MORE</h5>
                                <Link to="/">깃허브 바로가기</Link>
                            </div>
                            <div className="list_box">
                                <h5>PROFILE</h5>
                                <Link to="/">서핏 프로필 바로가기</Link>
                            </div>
                        </div>
                        <div className="text_box" ref={textBoxRef}>
                            안녕하세요! 제 프로필에 방문해주셔서 감사합니다. 더 많은 정보나 피드백이 필요하다면 언제든지
                            연락 기다리고 있겠습니다. 앞으로 더 많은 오픈 소스 프로젝트에 기여하고, 새로운 기술을 배우며
                            성장하고 싶습니다.
                            <a href="mailto:ukyunga0.1@gmail.com">이메일로 문의하기</a>
                        </div>
                    </div>
                    <Link to={'/'} className="close_btn">
                        ✕
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;
