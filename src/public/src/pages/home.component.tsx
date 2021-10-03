// External
import React from 'react';
// Components
import TopBar from '../components/top-bar/top-bar.component';
import HomepageContent from '../components/homepage-content/homepage-content.component';
import { Box } from '@mui/material';

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
