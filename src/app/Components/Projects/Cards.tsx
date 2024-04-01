"use client";
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { IconType } from 'react-icons';
import '../../../app/globals.css';
import Image from 'next/image';
import { FaHtml5, FaCss3, FaBootstrap, FaReact } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import { TbBrandLaravel } from 'react-icons/tb'; // Importa este icono si es necesario
import { SiTailwindcss } from 'react-icons/si';
import { Bounce} from "react-awesome-reveal";



export interface CardData {
  title: string;
  description: string;
  image: string; // Cambiar "Image" a "image" para que coincida con la interfaz CardData
  icons: IconType[];
}

const cardData: CardData[] = [
  { 
    title: 'GrandSports', 
    description: 'This project is an e-commerce platform for the sale of sports clothing, developed with Laravel and styled with Bootstrap. It offers an intuitive shopping experience, with features such as user management, shopping cart, and secure payment system. Its adaptable interface ensures a consistent experience across different devices.', 
    image: '/images/Proyecto1.jpg', 
    icons: [TbBrandLaravel, FaBootstrap] 
  },
  { 
    title: 'Sneakers', 
    description: 'A sneaker online store project, developed with HTML5, CSS, and Bootstrap. It offers a modern and attractive shopping experience, with a responsive design that adapts to different devices. Users can explore a wide range of sneakers, view product details, and make secure purchases.', 
    image: '/images/Proyecto2.png', 
    icons: [FaHtml5, FaCss3, FaBootstrap] 
  },
  { 
    title: 'RAM Memory Simulator', 
    description: 'An interactive RAM memory simulator developed with React, Next.js, and Tailwind CSS. This project allows users to experience how RAM works by simulating read and write processes. It utilizes modern technologies to provide a smooth and responsive user experience.', 
    image: '/images/Proyecto3.jpeg', 
    icons: [FaReact, SiNextdotjs, SiTailwindcss] 
  },
  { 
    title: 'GoalShirts', 
    description: 'Goalshirts is a platform for selling football-related shirts, created with HTML5 and Bootstrap. It offers a wide selection of shirts from popular teams and exclusive designs for football enthusiasts. The responsive design ensures a smooth browsing experience on all devices.', 
    image: '/images/Proyecto4.jpeg', 
    icons: [FaHtml5, FaCss3, FaBootstrap] 
  },
  { 
    title: 'Library Manager', 
    description: 'A library manager developed with Next.js, React, and Tailwind CSS. This project allows users to manage their book collection, add new books, perform searches, and keep track of loans. The combination of modern technologies offers an intuitive interface and advanced functionality.', 
    image: '/images/Proyecto5.jpeg', 
    icons: [FaReact, SiNextdotjs, SiTailwindcss] 
  },
  { 
    title: 'Aprendex', 
    description: 'Aprendex is an online learning platform with login and registration features, developed with Next.js, React, Tailwind CSS, and Bootstrap. It offers a wide variety of programming and technology courses. Users can register, log in, and access exclusive content, all with a friendly and secure interface.', 
    image: '/images/Proyecto6.jpeg', 
    icons: [FaReact, SiNextdotjs, FaBootstrap, SiTailwindcss] 
  },
];

function CardsProjects() {
  return (
    <div className='body-blanco'>
      <Bounce duration={1500}>
      <div className='py-40 mx-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 '>
        {cardData.map((card, index) => (
          <div key={index} className=' max-w-sm rounded overflow-hidden shadow-lg mb-8' style={{ border: '2px solid black' }}>
            <Card className='bg-black text-purple-800' style={{ height: '100%' }}>
              <CardActionArea>
                {/* Usar la etiqueta Image de Next.js */}
                <div style={{ position: 'relative', width: '100%', height: '300px' }}> {/* Ajusta la altura según tu diseño */}
                  <Image src={card.image} alt={card.title} layout='fill' objectFit='cover' />
                </div>
                <CardContent style={{ height: 'auto' }}>
                  <Typography gutterBottom variant='h5' component='div' align='center'>
                    {card.title}
                  </Typography>
                  <Typography className='text-white text-center' variant='body2'>
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className='justify-center' style={{ minHeight: '50px' }}>
                <div className='flex'>
                  {card.icons.map((Icon, idx: number) => (
                    <Icon key={idx} className='text-3xl text-zinc-500 mx-2 mb-2' />
                  ))}
                </div>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
      </Bounce>
    </div>
  );
}

export default CardsProjects;
