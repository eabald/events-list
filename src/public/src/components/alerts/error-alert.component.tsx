// External
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// Redux
import { clearEventsError } from '../../redux/events/events.actions';
// Components
import { Alert } from '@mui/material';

interface ErrorAlertProps {
  message: string;
}

/**
 * Error alert component
 * @author Maciej Krawczyk
 * @component
 * @param message text content of alert
 */
const ErrorAlert: React.FC<ErrorAlertProps> = ({ message }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(clearEventsError());
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, [dispatch]);
  return <Alert severity="error">{message}</Alert>;
};

export default ErrorAlert;
