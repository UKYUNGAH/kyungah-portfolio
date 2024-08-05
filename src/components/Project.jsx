import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Project = () => {
    // 각 박스의 호버 상태를 배열로 관리
    const [hoverIndex, setHoverIndex] = useState(null);

    const handleMouseOver = (index) => {
        setHoverIndex(index);
    };

    const handleMouseOut = () => {
        setHoverIndex(null);
    };
    const boxes = [
        {
            id: 1,
            title: '나와 닮은 짱구 등장인물 찾기',
            subtitle: 'mbti 심리테스트',
            imgSrc: '/project_mbti.png',
            className: 'box1',
            url: 'https://mbti-test-orpin.vercel.app/',
            githubUrl: 'https://github.com/UKYUNGAH/MBTI-TEST',
        },
        {
            id: 2,
            title: '개인 포트폴리오',
            subtitle: 'Portfolio of Kyungah',
            imgSrc: '/project_port.png',
            className: 'box2',
            url: 'https://kyungah-portfolio.vercel.app/',
            githubUrl: 'https://github.com/UKYUNGAH/kyungah-portfolio',
        },
        {
            id: 3,
            title: 'our life',
            subtitle: '익명의 자유게시판 커뮤니티',
            imgSrc: '/project_our.gif',
            className: 'box3',
            url: 'https://our-life-nu.vercel.app/',
            githubUrl: 'https://github.com/UKYUNGAH/Our-Life',
        },
        {
            id: 4,
            title: "[팀프로젝트] It's Yours",
            subtitle: '대학 전공서적 중고거래 플랫폼',
            imgSrc: '/project_itsyours.gif',
            className: 'box4',
            url: '',
            githubUrl: 'https://github.com/UKYUNGAH/ItsYours',
        },
        {
            id: 5,
            title: '[팀프로젝트] Flora & Dér',
            subtitle: '꽃을 중심으로 다양한 아이템과 서비스를 제공하는 쇼핑몰',
            imgSrc: '/project_flo.png',
            className: 'box5',
            url: '',
            githubUrl: 'https://github.com/UKYUNGAH/floraAndDer-Frontend',
        },
        {
            id: 6,
            title: 'KAKAO BOOK',
            subtitle: '카카오 API를 활용한 간단한 도서검색 사이트',
            imgSrc: '/project_kakao.png',
            className: 'box6',
            url: 'https://ukyungah.github.io/kakaoBook/',
            githubUrl: 'https://github.com/UKYUNGAH/kakaoBook',
        },
        {
            id: 7,
            title: 'NOTES App',
            subtitle: '로컬스토리지를 활용한 노트 앱',
            imgSrc: '/project_memoapp.png',
            className: 'box7',
            url: 'https://ukyungah.github.io/notesApp/',
            githubUrl: 'https://github.com/UKYUNGAH/notesApp',
        },
        {
            id: 8,
            title: '루이스폴센',
            subtitle: '루이스폴센 리디자인 웹사이트',
            imgSrc: '/project_lou.gif',
            className: 'box8',
            url: 'https://ukyungah.github.io/louispoulsen/',
            githubUrl: 'https://github.com/UKYUNGAH/louispoulsen',
        },
        {
            id: 9,
            title: '템버린즈',
            subtitle: '템버린즈 리디자인 웹사이트',
            imgSrc: '/project_tam.gif',
            className: 'box9',
            url: 'https://ukyungah.github.io/tamburins/',
            githubUrl: 'https://github.com/UKYUNGAH/tamburins',
        },
    ];

    return (
        <div className="project">
            <div className="container">
                <div className="project_wrap">
                    <h2>Project</h2>
                    <ul>
                        {boxes.map((box, index) => (
                            <li key={box.id} className={index % 2 === 0 ? 'li1' : 'li2'}>
                                <div
                                    className={`box ${box.className} ${hoverIndex === index ? 'on' : ''}`}
                                    onMouseOver={() => handleMouseOver(index)}
                                    onMouseOut={handleMouseOut}
                                >
                                    <div className="box_inner">
                                        <div className="contents">
                                            <h3>{box.title}</h3>
                                            <h4>{box.subtitle}</h4>
                                            <h5>&#123; view more &#125;</h5>
                                            <img src={box.imgSrc} alt="" />
                                        </div>
                                        <div className="overlay">
                                            <div className="inner">
                                                <p>{box.title}</p>
                                                {box.url && <Link to={box.url}>배포사이트 바로가기</Link>}
                                                <Link to="/">Github 바로가기</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Project;
