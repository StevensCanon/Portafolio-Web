import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


export default function TitlebarImageList() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <ImageList sx={{ width: '90%', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap' }} cols={3} rowHeight={200}>
        {itemData.map((item) => (
          <ImageListItem key={item.title} style={{ flex: '0 0 auto', width: '200px' }}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading='lazy'
              style={{ width: '100%', height: 'auto' }}
            />
            <ImageListItemBar
              title={item.title}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: '/images/creatividad.jpeg',
    title: 'CREATIVITY',
  },
  {
    img: '/images/liderazgo.jpeg',
    title: 'LEADERSHIP',
  },
  {
    img: '/images/adaptabilidad.jpeg',
    title: 'ADAPTABLE',
  },
  {
    img: '/images/autonoma.jpeg',
    title: 'AUTONOMOUS',
  },
  {
    img: '/images/comunicativa.jpeg',
    title: 'COMMUNICATIVE',
  },
  {
    img: '/images/pensamiento.jpeg',
    title: 'CRITICAL THINKING',
  },
  {
    img: '/images/problemas.jpeg',
    title: 'PROBLEM SOLVER',
  },
];
