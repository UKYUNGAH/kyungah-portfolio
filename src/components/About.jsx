'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef();
    const pRef = useRef();

    useEffect(() => {
        const container = containerRef.current;
        const p = pRef.current;
        const moText = p.querySelector('.mo_text');
        const pcText = p.querySelector('.pc_text');

        if (window.innerWidth <= 700) {
            if (pcText) pcText.style.display = 'none';
            if (moText) moText.style.display = 'block';
            p.style.fontSize = '4.5vw';
            p.style.minHeight = 'auto';
            p.style.maxHeight = 'none';
            p.style.padding = '40px 24px';
            p.style.lineHeight = '1.5';
            p.style.letterSpacing = '1px';
            p.style.textAlign = 'left';
        } else {
            if (moText) moText.style.display = 'none';
            if (pcText) pcText.style.display = 'inline';
        }

        // `container`의 애니메이션 설정
        gsap.fromTo(
            container.querySelector('h2'),
            { x: 0, opacity: 1 }, // 초기 상태
            {
                x: -1300, // 최종 x 위치
                opacity: 0,
                scrollTrigger: {
                    trigger: container, // 애니메이션을 트리거할 요소
                    start: 'top top', // 애니메이션 시작 지점
                    end: 'bottom bottom', // 애니메이션 끝 지점
                    scrub: 1, // 스크롤과 애니메이션 동기화
                    pin: true, // 요소 고정
                    anticipatePin: 1, // 핀을 예상하여 스크롤 위치에 더 잘 맞추기
                    // markers: true, // 디버깅용 마커 표시 (제거 가능)
                },
            },
        );

        // `p`의 애니메이션 설정
        gsap.fromTo(
            p,
            { opacity: 0 }, // 초기 상태
            {
                opacity: 1,
                scrollTrigger: {
                    trigger: p, // 애니메이션을 트리거할 요소
                    start: 'top center+=200', // 애니메이션 시작 지점
                    end: 'bottom bottom', // 애니메이션 끝 지점
                    scrub: 1, // 스크롤과 애니메이션 동기화
                    // markers: true, // 디버깅용 마커 표시 (제거 가능)
                    onEnter: () => p.classList.add('visible'), // 스크롤 위치에 따라 클래스를 추가
                },
            },
        );
    }, []);

    return (
        <div>
            <div className="about">
                <div className="container" ref={containerRef}>
                    <h2>About Me About Me About Me About Me</h2>
                </div>
                <div className="text_box">
                    <div className="text_wrap">
                        <p ref={pRef}>
                            {/* 데스크탑 */}
                            <span className="pc_text">
                                안녕하세요:) <br />
                                사용자가 오랫동안 기억하고 싶어하는 플랫폼을 구현합니다. <br />
                                <br />
                                저는 웹 표준을 준수하고 접근성을 고려한 마크업을 바탕으로, <br />
                                최고의 경험을 제공 할 수 있는 직관적이고 <br />
                                사용자친화적인 인터렉션을 제공합니다.
                            </span>
                            {/* 모바일 */}
                            <span className="mo_text">
                                안녕하세요:)
                                <br />
                                <br />
                                사용자가 오랫동안 기억하고 싶어하는 플랫폼을 구현합니다.
                                <br />
                                <br />웹 표준과 접근성을 바탕으로 직관적이고 사용자친화적인 인터렉션을 제공합니다.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
