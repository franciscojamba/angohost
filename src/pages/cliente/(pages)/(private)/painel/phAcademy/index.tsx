import React from 'react';
import VideoCard from '../../../../components/videoCard';

const videos = [
    {
        title: 'Como instalar WordPress PhPanel',
        description: 'Como instalar WordPress PhPanel.',
        videoUrl: 'https://www.youtube.com/embed/-lagGV-j588?si=Nn2d7pw8gDK81ozb',
        date: '01 de Janeiro, 2024',
    },
    {
        title: 'Como criar conta de e-mail PhPanel',
        description: 'Como criar conta de e-mail PhPanel',
        videoUrl: 'https://www.youtube.com/embed/gKF8C14cZ8c?si=DZCEh1KTuN4_xemb',
        date: '15 de Fevereiro, 2024',
    },
    {
        title: 'Como Hospedar Seu Site PhPanel',
        description: 'Como Hospedar Seu Site PhPanel',
        videoUrl: 'https://www.youtube.com/embed/G5rMkIoKUPA?si=mVTM4ZfzdKh2Yzxe',
        date: '01 de Janeiro, 2024',
    },
    {
        title: 'Como Instalar Certificado SSL PhPanel',
        description: 'Como Instalar Certificado SSL PhPanel',
        videoUrl: 'https://www.youtube.com/embed/qoo8SzT5NaY?si=mN8wFBoIDEieCzKq',
        date: '15 de Fevereiro, 2024',
    },
    {
        title: 'Como solicitar um plano de Hospedagem na PETROHOST',
        description: 'Como solicitar um plano de Hospedagem na PETROHOST',
        videoUrl: 'https://www.youtube.com/embed/KM64t3pA4fs',
        date: '01 de Janeiro, 2024',
    },
    {
        title: 'React para Iniciantes',
        description: 'Uma introdução ao React para quem está começando.',
        videoUrl: 'https://www.youtube.com/embed/Nfm8ALI5Mw4?si=OeFO37_cA9LuJ97m',
        date: '15 de Fevereiro, 2024',
    },

    {
        title: 'Three.js 101 Crash Course: Beginner’s Guide to 3D Web Design (7 HOURS!)',
        description: 'Dive into the world of 3D web development with our comprehensive 7-hour Three.js crash course.',
        videoUrl: 'https://www.youtube.com/embed/KM64t3pA4fs',
        date: '01 de Janeiro, 2024',
    },
    {
        title: 'React para Iniciantes',
        description: 'Uma introdução ao React para quem está começando.',
        videoUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY',
        date: '15 de Fevereiro, 2024',
    },

];

const PHAcademy: React.FC = () => {
    return (
        <div className="w-full h-full">
            <div className="w-full">
                <div className="flex items-center justify-between w-full h-[80px] my-[15px]">
                    <div className="flex flex-col items-start justify-center">
                        <h1 className="text-[#616161] font-[400] text-[2rem] font-[Rubik]" style={{ lineHeight: 1 }}>PH Academy</h1>
                        <p className="font-[Rubik] mt-2 opacity-70">Torne-se expert na ANGOHOST.</p>
                    </div>
                </div>

            </div>
            <div className="flex flex-wrap items-center justify-between w-full overflow-y-scroll gap-y-10" style={{height: 'calc(100vh - 180px)'}}>
                {videos.map((video, index) => (
                    <VideoCard
                        key={index}
                        title={video.title}
                        description={video.description}
                        videoUrl={video.videoUrl}
                        date={video.date}
                    />
                ))}
            </div>
        </div>
    );
};

export default PHAcademy;