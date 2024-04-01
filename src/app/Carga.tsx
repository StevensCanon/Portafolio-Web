"use client";
import React, { useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';

const IntroPage = () => {
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Demora de 4 segundos

    const originalText = 'STEVENS CAÑON'; // Texto original
    let index = 0;

    const interval = setInterval(() => {
      setText(originalText.substring(0, index)); // Actualiza el texto con un subconjunto de caracteres
      index++;

      if (index > originalText.length) {
        clearInterval(interval); // Detiene el intervalo cuando se alcanza el final del texto
      }
    }, 100); // Intervalo de tiempo entre cada letra

    return () => {
      clearTimeout(timer);
      clearInterval(interval); // Limpia el intervalo al desmontar el componente
    };
  }, []);

  return (
    <>
      {loading ? (
        // Pantalla de carga
        <div className='bg-black' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 9999 }}>
          <Fade duration={800}>
            <p className='intro text-white'>{text}</p>
          </Fade>
        </div>
      ) : null}
    </>
  );
};

export default IntroPage;

