import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// ScrollTrigger 플러그인을 GSAP에 등록합니다.
gsap.registerPlugin(ScrollTrigger);

const Project = () => {
    // h2와 ul을 참조하기 위한 ref
    const h2Ref = useRef();
    const ulRef = useRef();

    // useEffect(() => {
    //     // H2 애니메이션
    //     gsap.fromTo(
    //         h2Ref.current,
    //         { scale: 2, opacity: 0 }, // 애니메이션 시작 시 상태
    //         {
    //             scale: 1,
    //             opacity: 1,
    //             duration: 1, // 애니메이션 지속 시간
    //             ease: 'power2.out', // 애니메이션의 easing 함수
    //             scrollTrigger: {
    //                 trigger: h2Ref.current, // 애니메이션 트리거가 되는 요소
    //                 start: 'top center', // 애니메이션 시작 시점 (h2가 화면 중앙에 도달했을 때)
    //                 end: 'top top', // 애니메이션 종료 시점 (h2가 화면 상단을 지나면)
    //                 markers: true,
    //                 scrub: true, // 스크롤에 따라 애니메이션을 동기화
    //                 onEnter: () => {
    //                     gsap.to(ulRef.current, { autoAlpha: 1, duration: 0.5, opacity: 0 });
    //                 },
    //             },
    //         }
    //     );

    //     gsap.set(ulRef.current, { autoAlpha: 0 });
    // }, []);

    return (
        <div className="project">
            <div className="container">
                <div className="project_wrap">
                    <h2 ref={h2Ref} className="h2-animation">
                        Project
                    </h2>

                    <ul ref={ulRef} className="ul-animation">
                        <li className="li1">
                            <div className="box">
                                <h3>our life</h3>
                                <h4>익명의 자유게시판</h4>
                                <h5>view more</h5>
                            </div>
                        </li>
                        <li className="li2">
                            <div className="box"></div>
                        </li>
                        <li className="li1">
                            <div className="box"></div>
                        </li>
                        <li className="li2">
                            <div className="box"></div>
                        </li>
                        <li className="li1">
                            <div className="box"></div>
                        </li>
                        <li className="li2">
                            <div className="box"></div>
                        </li>
                        <li className="li1">
                            <div className="box"></div>
                        </li>
                        <li className="li2">
                            <div className="box"></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Project;
