"use client";
import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import '../../../app/globals.css';
import Image from 'next/image';
import { Zoom } from "react-awesome-reveal";
import { Fade} from "react-awesome-reveal";
function Body() {
  return (
    <div>
      <div className='body-blanco h-screen flex items-center justify-center'>
        <div className='grid grid-cols-2 gap-4 text-center mx-10 '>
          {/* Columna izquierda: Design */}
          <div className=''>
            <h1 className=' text-purple-950 text-4xl font-bold py-10 '>DESIGN</h1>
            <div className='text-black self-start justify-self-start'>
              <p className='text-justify'>
                In the field of development, I have the necessary and updated tools to build applications efficiently. I am adept at working independently or collaboratively to produce fast, robust solutions that are ready for scalability. By prioritizing performance and scalability, I ensure my solutions are built to withstand growth.
              </p>
              <div className='flex justify-center '>
                <Zoom duration={1200}>
              <Image src='/images/frontend.png' alt='Frontend Development' width={400} height={300} />
                </Zoom>
              </div>
            </div>
          </div>
          {/* Columna derecha: Development */}
          <div className='flex justify-center '>
            <div className='text-black self-start justify-self-start flex flex-col items-center '>
            <Zoom duration={1200}>
            <Image className=''src='/images/backend.png' alt='Frontend Development' width={300} height={300} />
           </Zoom>
              <h1 className='text-purple-950 text-4xl  font-bold py-10'>DEVELOPMENT</h1>
              <p className='text-justify '>
                In the field of development, I have the necessary and updated tools to build applications efficiently. I am adept at working independently or collaboratively to produce fast, robust solutions that are ready for scalability. By prioritizing performance and scalability, I ensure my solutions are built to withstand growth.
              </p>
            </div>
            </div>
          </div>
        </div>


      {/* Columna izquierda2: Design */}
      <div className='body-negro'>
        <div className='grid grid-cols-2 gap-4 py-20 text-center '>
          <div>
            <div className='text-white self-start justify-self-start  '>
              <div className='flex justify-center '>
                <Fade cascade delay={300} duration={3000}>
              <Image className=' pr border rounded-md' src='/images/pr.avif' alt='Frontend Development' width={800} height={400} style={{height:'568px'}}/>
              </Fade>
              </div>
            </div>
          </div>
          {/* Columna derecha2: Development */}
          <Fade cascade delay={300} duration={3000}>
          <div className='flex justify-center'>
          <div className='text-white self-start justify-self-start flex flex-col items-center  border rounded-lg py-24 px-10 bg-transparent mx-6'>
            <h1 className='text-white text-4xl my-9 font-bold '>WEB AND ANDROID APPLICATIONS.</h1>
            <p className='text-justify'>
            I&apos;m excited to share with you that I&apos;m taking my first steps into the world of app development, both for web and mobile devices. Currently, I am exploring technologies like React and Next.js for building modern, responsive web applications.
            Additionally, I am venturing into developing applications for Android devices, using components and tools that allow me to create interactive and functional experiences.
            My goal is to learn and grow in this exciting field of software development, and I look forward to sharing my progress and experiences with you on this journey.
            </p>
          </div>
        </div>
        </Fade>
        </div>
      </div>


      {/* Sección de mensaje */}
      <div className='body-blanco py-20'>
        <Zoom><h1 className='text-purple-900 text-5xl my-10  font-bold text-center'>SEND ME A MESSAGE</h1></Zoom>
        <div className='text-black text-center '>
          <p className='text-center mb-7 text-2xl'>
            Do you have any questions or proposals? Leave us your message.
          </p>
          <div className='flex justify-center mb-7 mx-auto'>
            <a href='mailto:elian.canon@uniminuto.edu.co'> 
            <Image className='border-4 my-8 border-black rounded-full solid-1px' src='/images/email.png' alt='Desarrollo Frontend' width={400} height={600} />
            </a>
          </div>
          <Zoom>
          <div className='grid grid-cols-2 gap-4 justify-center mb-20'>         
            <div className='flex items-center mx-auto text-2xl'>           
              <FaLocationDot />
              <p className='ml-2'>Colombia, Villavicencio</p>
              </div>
            <div className='flex items-center mx-auto text-2xl'> 
              <MdEmail />
              <p className='ml-2'>elian.canon@uniminuto.edu.co</p>
            </div>
            </div>
          </Zoom>
          </div>
        </div>
      </div>
  );
}

export default Body;
