'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
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
                        <h3>Let&#39;s connect</h3>
                        <h2>CONTECT</h2>
                        <div className="l_top">
                            <h4 className="info">유경아</h4>
                            <a href="mailto:ukyunga0.1@gmail.com" className="info info1 hover">
                                ukyunga0.1@gmail.com
                            </a>
                            <a href="tel:010-7794-2702" className="info info2 hover">
                                (+ 82) 010 - 7794 - 2702
                            </a>
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
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://github.com/UKYUNGAH"
                                    className="hover info3"
                                >
                                    Github
                                </a>
                            </div>
                            <div className="list_box">
                                <h5>PROFILE</h5>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://my.surfit.io/w/989694903"
                                    className="hover info4"
                                >
                                    Surfit Profile
                                </a>
                            </div>
                        </div>
                        <div className="text_box" ref={textBoxRef}>
                            안녕하세요! 제 포트폴리오 사이트에 방문해주셔서 감사합니다. 더 많은 정보나 피드백이
                            필요하다면 언제든지 연락 기다리고 있겠습니다. 앞으로 더 많은 프로젝트에 기여하고, 새로운
                            기술을 배우며 성장하고 싶습니다.
                            <br />
                            <div className="mail">
                                <a href="mailto:ukyunga0.1@gmail.com">이메일로 문의하기</a>
                            </div>
                        </div>
                    </div>
                    <Link href="/" className="close_btn">
                        ✕
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;
