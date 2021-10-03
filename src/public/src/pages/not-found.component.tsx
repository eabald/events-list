import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';

/**
 * 404 page component
 * @author Maciej Krawczyk
 * @component
 */
const NotFound: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        alignItems: 'center',
        margin: '-8px',
      }}
    >
      <Container component="main" sx={{ mb: 2 }} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Page not found
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Unfortunately the page you are looking for could not be found. Please try again.
        </Typography>
        <Link href="/">
          <Typography variant="body1">Go back to homepage</Typography>
        </Link>
      </Container>
    </Box>
  );
};

export default NotFound;
