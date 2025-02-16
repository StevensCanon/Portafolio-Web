import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
          <Tab className='bg-blue-400 font-bold' label='Courses' {...a11yProps(0)} />
          <Tab className='bg-red-500 font-bold' label='Tutorials' {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Typography component='div'>
          <ul>
            <li><a href='https://www.coursera.org/'>Coursera</a></li>
            <li><a href='https://www.udemy.com/es/'>Udemy</a></li>
            <li><a href='https://es.khanacademy.org/'>Khan Academy</a></li>
          </ul>
        </Typography>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Typography component='div'>
          <ul>
            <li><a href='https://www.youtube.com/@FaztCode'>Fazt Code</a></li>
            <li><a href='https://www.youtube.com/@freecodecamp'>freeCodeCamp</a></li>
            <li><a href='https://www.youtube.com/@NetNinja'>Net Ninja</a></li>
          </ul>
        </Typography>
      </CustomTabPanel>
    </Box>
  );
}
