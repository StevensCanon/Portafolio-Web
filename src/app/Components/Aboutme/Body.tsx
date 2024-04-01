'use client';
import React from 'react';
import TitlebarImageList from '@/app/Components/Aboutme/ImageList';
import CustomTabPanel from '@/app/Components/Aboutme/Buttons';
import Image from 'next/image';
import { Zoom, Slide, Fade} from "react-awesome-reveal";

function Body() {
  return (
    <div>
      <div className='body-blanco pt-36 pb-10'>
        <div className='grid grid-cols-2 gap-4 text-center justify-between'>
          {/* Columna izquierda: Imagen */}
          <div>
          <Slide>
            <div style={{ borderRadius: '400px 400px 0 0' }}>
              <div className='text-black self-start justify-self-start'>
                <div style={{ position: 'relative' }}>
                  <div className='mx-8'style={{ border: '4px solid black', borderTopLeftRadius: '400px', borderTopRightRadius: '400px', overflow: 'hidden', height:'575px' }}>
                    <Image src='/images/yo1.png' alt='Stevens Cañon' width={800} height={100} style={{ position: 'relative', height:'575px' }} />
                  </div>
                </div>
              </div>
            </div>
          </Slide>
          </div>

          {/* Columna derecha: Desarrollo */}
          <div>
          <Slide direction='right'>
            <div className='flex justify-center'>
              <div className=' text-black self-start justify-self-start flex flex-col items-center border rounded-lg border-black mx-4 px-8 py-8 bg-transparent'>
                <h1 className='text-black text-4xl py-5 font-bold'>WHO I AM?</h1>
                <p className='text-justify'>
                  Hello, my name is Elian Stevens Cañon Suarez, and I am 19 years old. Currently, I am in the fourth semester of the software development technology program at UNIVERSIDAD MINUTO DE DIOS &quot;UNIMINUTO&quot;.
                  I consider myself someone committed to certification and the pursuit of job opportunities in the field that I am passionate about, programming. I have participated in various student projects that 
                  have provided me with valuable experience, which you can explore in the Projects section or simply by following the link &quot;Go to projects&quot;.
                  I particularly enjoy dedicating myself to Frontend development, where creativity and inspiration play a fundamental role in my work. 
                  Similarly, I am interested in delving into Backend development, aiming to give life and functionality to each project I am involved in to ensure effective and intuitive use. Finally, I launch these projects
                  into production with the aim of delivering a quality final result. All of the aforementioned falls under the profile of a Full-stack Developer, an area in which I aspire to specialize. I also have an interest 
                  in game development, a topic I will discuss in another section.
                </p>
              </div>
            </div>
            </Slide>
          </div>
        </div>
      </div>

      <div className='body-negro py-10 flex flex-col items-center '>
        <h1 className='text-white text-2xl text-center pb-8  mx-8'>SKILLS</h1>
        <div className='px-10 mb-24'>
          <TitlebarImageList />
        </div>
      </div>
      
      <div className='body-blanco'>
      <Fade cascade duration={1500}>
        <div className='flex flex-col items-center'>
          <h1 className='text-black font-bold  text-4xl text-center pt-24 pb-20 '>I RECOMMEND YOU..</h1>
        </div>
        <div className='grid grid-cols-2 gap-8 text-center '>
          {/* Columna izquierda: Texto de Recomendados */}
          <div>
            
            <p className='text-black text-justify  px-10'>
              &quot;For those looking to expand their skills and knowledge, there are a wealth of online resources that can prove invaluable. Websites like Coursera, Udemy and Khan Academy offer a wide variety of courses in various fields, from programming and design to business and sciences. These courses, taught by subject matter experts, provide a flexible and accessible learning experience for everyone. Plus, YouTube is a gold mine for finding free tutorials on almost any topic imaginable. Channels like freeCodeCamp, Traversy Media and The Net Ninja are just a few examples of the abundance of quality content available. Exploring these platforms can be the first step towards acquiring new skills and professional development.&quot;      
            </p>
 
          </div>
          {/* Columna derecha: Botón de Ver Recursos */}
          <div className='flex flex-col items-center justify-center '>
            <div className='text-black '>
              <CustomTabPanel />
            </div>
          </div>
        </div>
        </Fade>
        <Zoom>
        <div className='justify-center flex flex-col items-center'>
          <h1 className='font-bold text-4xl pt-24 text-black'>CERTIFICATE IN FULL-STACK WEB DEVELOPMENT</h1>
          <Image src='/images/full-stack.jpg' alt='certificado' width={1200} height={800} className='mx-40 my-20' />          
        </div>
        </Zoom>
      </div>
    </div>
  );
}

export default Body;
