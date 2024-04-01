import React from 'react';
import { Container, Grid, Typography, Link, Divider } from '@mui/material';
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin, FaYoutube,FaBitbucket } from 'react-icons/fa';
import '../../../app/globals.css';

function Footer() {
  return (
    <footer className='footer' style={{ backgroundColor: '#181818', color: '#ffffff' }}>
      <Container maxWidth='lg'>
        <Grid container spacing={3} alignItems='flex-start'>
          {/* Primera columna */}
          <Grid item xs={12} md={4}>
            <Typography className='ml-6' variant='h6' gutterBottom>
              Sobre Mí
            </Typography>
            <Typography className='text-zinc-300 ml-6' variant='body2'>
              My name is Stevens Ca&ntilde;on, I am a student and I have aspirations to become certified as a full-stack developer. I have a great interest in growing professionally within the software development industry. As a freelancer, I would like to specialize in development for both Android and web platforms.
            </Typography>
          </Grid>
          {/* Línea divisoria */}
          <Grid item xs={12} md={1} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Divider orientation='vertical' style={{ backgroundColor: '#ffffff', height: '80%', width: '2px' }} />
          </Grid>
          {/* Segunda columna */}
          <Grid item xs={12} md={4}>
            <Typography className='ml-6 mt-3 md:mt-0' variant='h6' gutterBottom>
              Últimos Proyectos
            </Typography >
            <ul className='ml-6 mt-3 md:mt-0' style={{ listStyleType: 'none', padding: 0 }}>
              <li><Link href='google.com' className='text-zinc-300 mb-2' variant='body2'> GrandSport&apos;s</Link></li>
              <li><Link href='google.com' className='text-zinc-300 mb-2' variant='body2'>Simulator Memoria RAM</Link></li>
              <li><Link href='google.com' className='text-zinc-300 mb-2' variant='body2'>Register and Login</Link></li>
              <li><Link href='google.com' className='text-zinc-300 mb-2' variant='body2'>Sneakers</Link></li>
            </ul>
          </Grid>
          {/* Tercera columna */}
          <Grid item xs={12} md={3}>
            <Typography className='ml-6 mt-3 md:mt-0' variant='h6' gutterBottom>
              StevensCañon
            </Typography>
            <ul className='ml-6 mt-3 md:mt-0' style={{ listStyleType: 'none', padding: 0 }}>
              <li><Link href='/About' className='text-zinc-300 mb-2' variant='body2'>About Me</Link></li>
              <li><Link href='/Contact' className='text-zinc-300 mb-2' variant='body2'>Contact</Link></li>
              <li><Link href='https://www.coursera.org/learn/react-basics' className='text-zinc-300 mb-2' variant='body2'>Learn Programming</Link></li>
              <li><Link href='google.com' className='text-zinc-300 mb-2' variant='body2'>Cookies Policy</Link></li>
            </ul>
          </Grid>
          {/* Iconos */}
          <Grid item xs={12} md={12} style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Link href='/' color='inherit' style={{ marginLeft: '0px', marginRight: '30px', textDecoration: 'none' }}>Home</Link>
            <Link href='/Projects' color='inherit' style={{ marginLeft: '10px', marginRight: '30px', textDecoration: 'none' }}>Projects</Link>
            <Link href='/About' color='inherit' style={{ marginLeft: '10px', marginRight: '30px', textDecoration: 'none' }}>About Me</Link>
            <Link href='/Contact' color='inherit' style={{ marginLeft: '10px', marginRight: '30px', textDecoration: 'none' }}>Contact</Link>
            <Link className='text-2xl ' href='https://twitter.com/home' color='inherit' style={{ marginLeft: '500px', marginRight: '10px', textDecoration: 'none' }}><FaTwitter /></Link>
            <Link className='text-2xl' href='https://www.instagram.com/' color='inherit' style={{ marginLeft: '10px', marginRight: '10px', textDecoration: 'none' }}><FaInstagram /></Link>
            <Link className='text-2xl' href='https://github.com/StevensCanon' color='inherit' style={{ marginLeft: '10px', marginRight: '10px', textDecoration: 'none' }}><FaGithub /></Link>
            <Link className='text-2xl' href='https://bitbucket.org/reporsitorio/workspace/repositories/' color='inherit' style={{ marginLeft: '10px', marginRight: '10px', textDecoration: 'none' }}><FaBitbucket /></Link>
            <Link className='text-2xl' href='https://co.linkedin.com/' color='inherit' style={{ marginLeft: '10px', marginRight: '10px', textDecoration: 'none' }}><FaLinkedin /></Link>
            <Link className='text-2xl' href='https://www.youtube.com/?hl=es' color='inherit' style={{ marginLeft: '10px', marginRight: '10px', textDecoration: 'none' }}><FaYoutube /></Link>
          </Grid>
        </Grid>
        {/* Línea horizontal */}
        <Divider className='w-full mb-2' style={{ backgroundColor: 'white', margin: '20px 0' }} />
        {/* Pie de página */}
        <Typography  variant='body2' align='center' style={{ backgroundColor: '#181818', padding: '15px 0', paddingTop: '20px', paddingBottom: '20px' }}>
          © {new Date().getFullYear()} Stevens Ca&ntilde;on. Todos los derechos reservados.
          <Link className='text-zinc-300' href='https://devtop.io/politica-de-privacidad-del-sitio-web/'  style={{ marginLeft: '10px', marginRight: '10px', marginBottom: '8px', textDecoration: 'none' }}>Política de Privacidad</Link>
          <Link className='text-zinc-300' href='https://www.f5.com/es_es/company/policies/support-policies'  style={{ marginLeft: '10px', marginRight: '10px', marginBottom: '8px', textDecoration: 'none' }}>Política de Soporte</Link>
          <Link className='text-zinc-300' href='#'  style={{ marginLeft: '10px', marginRight: '10px', marginBottom: '8px', textDecoration: 'none' }}>Acerca de Nosotros</Link>
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
