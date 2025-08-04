import React, { useEffect, useState } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import FinalMessage from './components/FinalMessage';
import Footer from './components/Footer';
import Lenis from 'lenis';
import { Routes, Route, useLocation } from 'react-router-dom';

const colorModes = [
    { background: '#FFECDD', color: '#FA3701', borderColor: '#FA3701', hoverColor: '#de3304' },
    { background: '#3B5B8B', color: '#EEC887', borderColor: '#EEC887', hoverColor: '#ddb97d' },
    { background: '#F299C9', color: '#F14AA4', borderColor: '#F14AA2', hoverColor: '#de4294' },
    { background: '#645C31', color: '#ED96C0', borderColor: '#ED96C0', hoverColor: '#b87595' },
    { background: '#1F6246', color: '#E8B3C3', borderColor: '#E8B3C3', hoverColor: '#cd9dab' },
    { background: '#F3EEE3', color: '#4340A0', borderColor: '#4340A0', hoverColor: '#383585' },
];

function App() {
    const [modeIndex, setModeIndex] = useState(0);
    const location = useLocation();

    const changeMood = () => {
        setModeIndex((prevIndex) => (prevIndex + 1) % colorModes.length);
        const root = document.documentElement;

        const newMode = colorModes[(modeIndex + 1) % colorModes.length];
        root.style.setProperty('--background-color', newMode.background);
        root.style.setProperty('--text-color', newMode.color);
        root.style.setProperty('--border-color', newMode.borderColor);
        root.style.setProperty('--hover-color', newMode.hoverColor);
    };

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    // 페이지별 메타 데이터
    const getPageMeta = () => {
        switch (location.pathname) {
            case '/Contact':
                return {
                    title: '연락처 - 유경아 포트폴리오 | 프론트엔드 개발자',
                    description:
                        '프론트엔드 개발자 유경아의 연락처 정보입니다. 프로젝트 문의나 협업 제안을 환영합니다.',
                    url: 'https://kyungah-portfolio.vercel.app/Contact',
                };
            default:
                return {
                    title: '유경아 포트폴리오 | 프론트엔드 개발자',
                    description: '프론트엔드 개발 및 웹 퍼블리싱 작업물을 소개하는 유경아의 포트폴리오 페이지입니다.',
                    url: 'https://kyungah-portfolio.vercel.app/',
                };
        }
    };

    const pageMeta = getPageMeta();

    return (
        <div className="App">
            <HelmetProvider>
                <Helmet>
                    <title>{pageMeta.title}</title>

                    {/* Google Site Verification */}
                    <meta name="google-site-verification" content="a7Ye6apCGmZJmfZX5Qplk77nA5qdSsmFJjjuAgj5P88" />
                    {/* 기본 메타 태그 */}
                    <meta name="description" content={pageMeta.description} />
                    <meta
                        name="keywords"
                        content="프론트엔드 포트폴리오, 웹 퍼블리셔, 포트폴리오, 퍼블리셔 포트폴리오, 유경아, React, 웹개발, 웹디자인, JavaScript"
                    />
                    <meta name="robots" content="index, follow" />
                    <meta name="author" content="유경아" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                    {/* Canonical URL */}
                    <link rel="canonical" href={pageMeta.url} />

                    {/* Open Graph 태그 */}
                    <meta property="og:title" content={pageMeta.title} />
                    <meta property="og:description" content={pageMeta.description} />
                    <meta property="og:image" content="https://kyungah-portfolio.vercel.app/thumbnail.png" />
                    <meta property="og:url" content={pageMeta.url} />
                    <meta property="og:type" content="website" />
                    <meta property="og:site_name" content="유경아 포트폴리오" />

                    {/* Twitter Card 태그 */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content={pageMeta.title} />
                    <meta name="twitter:description" content={pageMeta.description} />
                    <meta name="twitter:image" content="https://kyungah-portfolio.vercel.app/thumbnail.png" />

                    {/* 언어 설정 */}
                    <meta httpEquiv="content-language" content="ko-KR" />
                    <html lang="ko" />

                    {/* 구조화된 데이터 (JSON-LD) */}
                    <script type="application/ld+json">
                        {JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Person',
                            name: '유경아',
                            jobTitle: '프론트엔드 개발자',
                            description: '프론트엔드 개발 및 웹 퍼블리싱 전문가',
                            url: 'https://kyungah-portfolio.vercel.app',
                            knowsAbout: ['React', 'JavaScript', 'HTML', 'CSS', '웹 퍼블리싱', '프론트엔드 개발'],
                            alumniOf: '프론트엔드 개발',
                            workLocation: {
                                '@type': 'Place',
                                name: '대한민국',
                            },
                        })}
                    </script>
                </Helmet>
            </HelmetProvider>

            <div className="wrap">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Header changeMood={changeMood} />
                                <Main data-aos="fade-up" />
                                <About />
                                <Project />
                                <FinalMessage />
                                <Footer />
                            </>
                        }
                    />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
