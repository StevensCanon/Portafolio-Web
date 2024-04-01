"use client"; 
import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import '../../globals.css';

interface TypewriterProps {
  text: string;
  fontSize?: string;
}

function Typewriter({ text, fontSize = '2rem' }: TypewriterProps) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(prevText => prevText + text[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <Typography
      className='text-white mx-4 my-4 text-center'
      style={{ fontSize: fontSize, zIndex: 1 }}
      dangerouslySetInnerHTML={{ __html: displayText }}
    />
  );
}

function Header() {
  const headerHeight = 550;
  const [showSecondParagraph, setShowSecondParagraph] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSecondParagraph(true);
    }, 6600);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <header className='header' style={{ position: 'relative' }}>
      <video src='/videos/particulas.mp4' autoPlay loop muted className='w-full'></video>
      <div className='flex mt-14' style={{ position: 'absolute', top: `calc(50% - ${headerHeight / 2}px)`, left: 20, right: 0, justifyContent: 'center', zIndex: 1 }}>
        <div className='left-column mt-12' style={{ fontSize: '2.5rem', zIndex: 1 }}>
          <div className='mx-8 my-5 bg-black bg-opacity-20 p-1 rounded-lg' style={{ maxWidth: '600px', margin: '5', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)', zIndex: 1 }}>
          <Typewriter text='I am a Software Development student focused on driving startup success through my passion for technology and problem solving' />
          </div>
          {showSecondParagraph && (
            <div className='mx-8 my-5 bg-black bg-opacity-20 p-1 rounded-lg' style={{ maxWidth: '600px', margin: '5', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)', zIndex: 1 }}>
              <Typewriter text='My practical and effective approach has allowed me to lead multidisciplinary teams to complete projects in a timely manner. I am committed with continuous learning and technical i work with' fontSize='1rem' />
            </div>
          )}
        </div>
        <div className='right-column mx-7' style={{ zIndex: 1 }}>
          <div className={`flex justify-center text-right ${showSecondParagraph ? 'animate-right' : ''}`} style={{ width: '600px', height: '550px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)', zIndex: 1 }}>
            <img src='/images/xero-code.gif' alt='Coding GIF' style={{ boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.2)', zIndex: 1 }} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
