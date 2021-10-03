// External
import React from 'react';
import { useSelector } from 'react-redux';
// Redux
import { RootState } from '../../redux/root-reducer';
// Components
import { Box } from '@mui/material';
import SuccessAlert from '../alerts/success-alert.component';
import ErrorAlert from '../alerts/error-alert.component';

/**
 * Alerts output component
 * @author Maciej Krawczyk
 * @component
 */
const FlashOutput: React.FC = () => {
  const success = useSelector((state: RootState) => state.utils.success);
  const eventError = useSelector((state: RootState) => state.events.error);
  return (
    <Box sx={{ mt: 2 }}>
      {success ? <SuccessAlert /> : ''}
      {eventError ? <ErrorAlert message={eventError} /> : ''}
    </Box>
  );
};

export default FlashOutput;
