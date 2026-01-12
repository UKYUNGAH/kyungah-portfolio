import './globals.css';
import './reset.css';
import './App.css';

export const metadata = {
    title: '유경아 포트폴리오 | 프론트엔드 개발자',
    description: '프론트엔드 개발 및 웹 퍼블리싱 작업물을 소개하는 유경아의 포트폴리오 페이지입니다.',
    keywords:
        '프론트엔드 포트폴리오, 웹 퍼블리셔, 포트폴리오, 퍼블리셔 포트폴리오, 유경아, React, 웹개발, 웹디자인, JavaScript',
    authors: [{ name: '유경아' }],
    robots: 'index, follow',
    verification: {
        google: 'a7Ye6apCGmZJmfZX5Qplk77nA5qdSsmFJjjuAgj5P88',
    },
    openGraph: {
        title: '유경아 포트폴리오 | 프론트엔드 개발자',
        description: '프론트엔드 개발 및 웹 퍼블리싱 작업물을 소개하는 유경아의 포트폴리오 페이지입니다.',
        url: 'https://kyungah-portfolio.vercel.app/',
        siteName: '유경아 포트폴리오',
        images: [
            {
                url: 'https://kyungah-portfolio.vercel.app/thumbnail.png',
                width: 1200,
                height: 630,
            },
        ],
        locale: 'ko_KR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: '유경아 포트폴리오 | 프론트엔드 개발자',
        description: '프론트엔드 개발 및 웹 퍼블리싱 작업물을 소개하는 유경아의 포트폴리오 페이지입니다.',
        images: ['https://kyungah-portfolio.vercel.app/thumbnail.png'],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
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
                        }),
                    }}
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
