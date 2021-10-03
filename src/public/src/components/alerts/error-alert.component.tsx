import { Alert } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearEventsError } from '../../redux/events/events.actions';

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
