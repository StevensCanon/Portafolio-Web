'use client';
import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import '../../globals.css';

interface TypewriterProps {
  text: string;
  fontSize?: string; 
}

function Typewriter({ text, fontSize = '1rem' }: TypewriterProps) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.substring(0, currentIndex + 1));
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
      style={{ fontSize: fontSize, zIndex: 1 }} // Utilizar el tamaño de fuente especificado
      dangerouslySetInnerHTML={{ __html: displayText }} // Interpretar HTML
    />
  );
}

function Header() {
  return (
    <header className='header' style={{ position: 'relative', height: '400px' }}> {/* Reduciendo el tamaño del header */}
     <div style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: 'black', opacity: 0.6, zIndex: 0 }}></div> {/* Fondo negro detrás del video */}
     <video src='/videos/lineas.mp4' autoPlay loop muted className='w-full' style={{ height: '400px', objectFit: 'cover', zIndex: 1 }}></video> {/* Ajustando la altura del video */}
     <div className='flex mt-14' style={{ position: 'absolute', top: '50%', left: 20, right: 0, transform: 'translateY(-50%)', justifyContent: 'center', zIndex: 1 }}>
        <div className='left-column mt-44 mb-10 ' style={{ fontSize: '0.8rem', zIndex: 1 }}>
          <div className='rounded-lg' style={{ maxWidth: '100%', margin: '5', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0)', zIndex: 1 }}>
            <Typewriter text='Know my portfolio. These are some of the projects in which he participates as a student.' fontSize='1.1rem' />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
