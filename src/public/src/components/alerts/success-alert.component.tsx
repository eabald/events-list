// External
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// Redux
import { toggleSuccess } from '../../redux/utils/utils.actions';
// Components
import { Alert } from '@mui/material';

/**
 * Success alert component
 * @author Maciej Krawczyk
 * @component
 */
const SuccessAlert: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(toggleSuccess(false));
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, [dispatch]);
  return <Alert severity="success">Success!</Alert>;
};

export default SuccessAlert;
