'use client';
import React, { useState } from 'react';
import { IoLogoNodejs, IoLogoReact, IoLogoGithub } from 'react-icons/io5';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMysql, SiTailwindcss, SiBootstrap, SiPrisma, SiTypescript, SiHtml5 } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import { MdCss } from 'react-icons/md';
import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
import '../../../app/globals.css';



function LanguageContainer() {
    const [selectedLanguage, setSelectedLanguage] = useState('');

    const languages = [
        { name: 'React', icon: <IoLogoReact /> },
        { name: 'NodeJs', icon: <IoLogoNodejs /> },
        { name: 'NextJs', icon: <TbBrandNextjs /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'PostgreSQL', icon: <BiLogoPostgresql /> },
        { name: 'CSS', icon: <MdCss /> },
        { name: 'Tailwind', icon: <SiTailwindcss /> },
        { name: 'Bootstrap', icon: <SiBootstrap /> },
        { name: 'Prisma', icon: <SiPrisma /> },
        { name: 'Typescript', icon: <SiTypescript /> },
        { name: 'GitHub', icon: <IoLogoGithub /> },
        { name: 'Html', icon: <SiHtml5 /> }
    ];

    const handleMouseEnter = (languageName: React.SetStateAction<string>) => {
        setSelectedLanguage(languageName);
    };

    const handleMouseLeave = () => {
        setSelectedLanguage('');
    };

    return (
        <div className='body-negro w-auto h-auto p-10'>
            <Fade duration={1600}>
            <p className='text-white text-center text-4xl font-bold mt-10 '>My Toolbox</p>
            </Fade>
            <Slide duration={1500}>
            <div className='flex justify-center bg-purple-900 py-3 mx-auto w-2/4 rounded-2xl my-20'>
                <div className='grid grid-cols-4 gap-3 '>
                    {languages.map((language, index) => (
                        <div
                            key={index}
                            className={`text-l flex items-center justify-center rounded-lg bg-zinc-900 p-4 shadow-md text-white mx-2 ${
                                selectedLanguage === language.name ? 'scale-150 transition-all duration-300' : 'transition-all duration-300' 
                            }`}
                            onMouseEnter={() => handleMouseEnter(language.name)}
                            onMouseLeave={handleMouseLeave}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className='flex items-center'>
                                {language.icon}
                                <span className='ml-2'>{language.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </Slide>
        </div>
    );
}

export default LanguageContainer;
