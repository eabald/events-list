// External
import React from 'react';
// Components
import { Container, LinearProgress } from '@mui/material';
// Styled
import { PageLoaderElement } from './page-loader.styles';

/**
 * Main loader component
 * @author Maciej Krawczyk
 * @component
 */
const PageLoader: React.FC = () => (
  <PageLoaderElement>
    <Container component="main" maxWidth={false} disableGutters>
      <LinearProgress />
    </Container>
  </PageLoaderElement>
);

export default PageLoader;
