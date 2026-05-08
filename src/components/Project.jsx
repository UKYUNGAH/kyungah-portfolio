import React, { useState } from 'react';

const Project = () => {
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
            title: '포켓몬 도감 (Pokedex)',
            subtitle: 'PokeAPI를 활용한 포켓몬 도감 웹 서비스',
            imgSrc: '/project_pokedex.gif',
            className: 'box1',
            url: 'https://pokedex-eta-ivory-81.vercel.app/',
            githubUrl: 'https://github.com/UKYUNGAH',
        },
        {
            id: 2,
            title: 'Movie Archive',
            subtitle: 'TMDB API를 활용한 영화·TV 프로그램 아카이브',
            imgSrc: '/project_movie.gif',
            className: 'box2',
            url: 'https://movie-archive-ten.vercel.app/',
            githubUrl: 'https://github.com/UKYUNGAH',
        },
        {
            id: 3,
            title: '[외주] Flowra',
            subtitle: '클라이언트 디자인 시안 기반 퍼블리싱',
            imgSrc: '/project_flowra.gif',
            className: 'box3',
            url: 'https://client-owra.vercel.app/',
            githubUrl: 'https://github.com/UKYUNGAH',
        },
        {
            id: 4,
            title: '[외주] Any Image To Code',
            subtitle: '디자인·퍼블리싱·개발 전 과정 단독 담당',
            imgSrc: '/project_anyimage.gif',
            className: 'box4',
            url: 'https://any-image-xi.vercel.app/',
            githubUrl: 'https://github.com/UKYUNGAH',
        },
        {
            id: 5,
            title: '[외주] Side Project World',
            subtitle: '사이드 프로젝트 팀원 모집 플랫폼',
            imgSrc: '/project_sideproject.gif',
            className: 'box5',
            url: 'https://side-project-world.vercel.app/',
            githubUrl: 'https://github.com/UKYUNGAH',
        },
        {
            id: 6,
            title: '나와 닮은 짱구 등장인물 찾기',
            subtitle: 'mbti 심리테스트',
            imgSrc: '/project_mbti.png',
            className: 'box6',
            url: 'https://mbti-test-orpin.vercel.app/',
            githubUrl: 'https://github.com/UKYUNGAH/MBTI-TEST',
        },
        {
            id: 7,
            title: '개인 포트폴리오',
            subtitle: 'Portfolio of Kyungah',
            imgSrc: '/project_port.png',
            className: 'box7',
            url: '',
            githubUrl: 'https://github.com/UKYUNGAH/kyungah-portfolio',
        },
        {
            id: 8,
            title: 'our life',
            subtitle: '익명의 자유게시판 커뮤니티',
            imgSrc: '/project_our.gif',
            className: 'box8',
            url: 'https://our-life-nu.vercel.app/',
            githubUrl: 'https://github.com/UKYUNGAH/Our-Life',
        },
        {
            id: 9,
            title: "[팀프로젝트] It's Yours",
            subtitle: '대학 전공서적 중고거래 플랫폼',
            imgSrc: '/project_itsyours.gif',
            className: 'box9',
            url: '',
            githubUrl: 'https://github.com/UKYUNGAH/ItsYours',
        },
        {
            id: 10,
            title: '[팀프로젝트] Flora & Dér',
            subtitle: '꽃을 중심으로 다양한 아이템과 서비스를 제공하는 쇼핑몰',
            imgSrc: '/project_flo.png',
            className: 'box10',
            url: '',
            githubUrl: 'https://github.com/UKYUNGAH/floraAndDer-Frontend',
        },
        {
            id: 11,
            title: 'KAKAO BOOK',
            subtitle: '카카오 API를 활용한 간단한 도서검색 사이트',
            imgSrc: '/project_kakao.png',
            className: 'box11',
            url: 'https://ukyungah.github.io/kakaoBook/',
            githubUrl: 'https://github.com/UKYUNGAH/kakaoBook',
        },
        {
            id: 12,
            title: 'NOTES App',
            subtitle: '로컬스토리지를 활용한 노트 앱',
            imgSrc: '/project_memoapp.png',
            className: 'box12',
            url: 'https://ukyungah.github.io/notesApp/',
            githubUrl: 'https://github.com/UKYUNGAH/notesApp',
        },
        {
            id: 13,
            title: '루이스폴센',
            subtitle: '루이스폴센 리디자인 웹사이트',
            imgSrc: '/project_lou.gif',
            className: 'box13',
            url: 'https://ukyungah.github.io/louispoulsen/',
            githubUrl: 'https://github.com/UKYUNGAH/louispoulsen',
        },
        {
            id: 14,
            title: '템버린즈',
            subtitle: '템버린즈 리디자인 웹사이트',
            imgSrc: '/project_tam.gif',
            className: 'box14',
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
                            <li key={box.id} className={box.id % 2 !== 0 ? 'li1' : 'li2'}>
                                {/* <li key={box.id} className={index % 2 === 0 ? 'li1' : 'li2'}> */}
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
                                                {box.url && (
                                                    <a target="_blank" rel="noopener noreferrer" href={box.url}>
                                                        배포사이트 바로가기
                                                    </a>
                                                )}
                                                <a target="_blank" rel="noopener noreferrer" href={box.githubUrl}>
                                                    Github 바로가기
                                                </a>
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
