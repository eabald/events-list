import { Container, LinearProgress } from '@mui/material';
import React from 'react';
import { PageLoaderElement } from './page-loader.styles';

const PageLoader: React.FC = () => (
  <PageLoaderElement>
    <Container component="main" maxWidth={false} disableGutters>
      <LinearProgress />
    </Container>
  </PageLoaderElement>
);

export default PageLoader;
