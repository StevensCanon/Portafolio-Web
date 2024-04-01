'use client' ;
import React, { useState, useEffect } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';

const customTheme = createTheme({
  transitions: {
    duration: {
      standard: 300, // Duración de la transición en milisegundos
    },
  },
});

const StyledAvatar = styled(Avatar)`
  ${({ theme }) => `
    cursor: pointer;
    transition: ${theme.transitions.create(['background-color', 'transform'], {
      duration: theme.transitions.duration.standard,
    })};
    &:hover {
      background-color: ${theme.palette.secondary.main};
      transform: scale(1.3);
    }
  `}
`;

const pages = ['HOME', 'PROJECTS', 'ABOUT ME', 'CONTACT'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [scrollY, setScrollY] = useState(0);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigateToPage = (page: string) => {
    switch (page) {
      case 'HOME':
        window.location.href = '/';
        break;
      case 'PROJECTS':
        window.location.href = '/Projects';
        break;
      case 'ABOUT ME':
        window.location.href = '/About';
        break;
      case 'CONTACT':
        window.location.href = '/Contact';
        break;
      default:
        break;
    }
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position='fixed' sx={{ backgroundColor: scrollY > 100 ? 'transparent' : 'rgba(0, 0, 0, 0.9)', boxShadow: scrollY > 100 ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.1)', transition: 'background-color 0.3s ease, box-shadow 0.3s ease' }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters sx={{ height: 90, justifyContent: 'space-between', borderRadius: scrollY > 100 ? '10px' : '0' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ThemeProvider theme={customTheme}>
              <StyledAvatar
                alt='Logo de la empresa'
                src='/images/logo.png'
                sx={{ width: 80, height: 80, marginRight: 2 }}
              />
            </ThemeProvider>
            <Typography 
              variant='h6'
              noWrap
              className='hidden md:flex font-mono font-bold tracking-wide text-white'
              sx={{ fontSize: '1.5rem' }}
            >
              PORTFOLIO
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ backgroundColor: scrollY > 100 ? 'rgb(0, 0, 0, 0.6)' : 'transparent', borderRadius: '80px', padding: '0px 10px' }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  className='text-white font-bold'
                  sx={{ fontSize: '1.2rem', marginRight: '4px' }}
                  onClick={() => navigateToPage(page)}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Box>
          <Box>
            <Tooltip title='Open settings'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 9 }}>
                <Avatar alt='Remy Sharp' src='/images/yo.png' />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '60px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign='center'>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
