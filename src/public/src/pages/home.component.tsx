import React from 'react';
import TopBar from '../components/top-bar/top-bar.component';
import { Box } from '@mui/material';
import HomepageContent from '../components/homepage-content/homepage-content.component';

/**
 * Homepage component
 * @author Maciej Krawczyk
 * @component
 */
const Home: React.FC = () => {
  return (
    <Box sx={{ margin: '-8px' }}>
      <TopBar />
      <HomepageContent />
    </Box>
  );
};

export default Home;
