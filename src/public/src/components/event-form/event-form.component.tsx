import React from 'react';
import { Box, TextField, Grid, ButtonGroup, IconButton } from '@mui/material';
import { Check as CheckIcon, Clear as ClearIcon } from '@mui/icons-material';
import { FormikHelpers, useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  firstName: yup
    .string()
    .min(2, 'First name have to have at least two characters')
    .max(128, "First name can't be longer than 128 characters")
    .required('First name is required'),
  lastName: yup
    .string()
    .min(2, 'Last name have to have at least two characters')
    .max(128, "Last name can't be longer than 128 characters")
    .required('Last name is required'),
  email: yup.string().email('Enter a valid email').required('Email is required'),
  date: yup.date().required('Event date is required'),
});

interface EventFormProps {
  initialValues: EventData;
  submitHandler: (values: EventData, actions: FormikHelpers<EventData>) => void | Promise<void>;
  clearHandler: () => void;
}

/**
 * Event submission form with formik wrapper
 * @author Maciej Krawczyk
 * @component
 * @param initialValues initial content of form
 * @param submitHandler method submitting form
 * @param clearHandler method resetting form state and visibility
 */
const EventForm: React.FC<EventFormProps> = ({ initialValues, submitHandler, clearHandler }) => {
  const formik = useFormik({
    validationSchema,
    initialValues,
    onSubmit: submitHandler,
  });
  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ width: '100%' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          {initialValues.id ? <input type="hidden" id="id" name="id" value={initialValues.id} /> : ''}
          <TextField
            fullWidth
            label="First name"
            id="firstName"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            label="Last name"
            id="lastName"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <TextField
            fullWidth
            label="Date"
            placeholder=""
            type="date"
            id="date"
            name="date"
            value={formik.values.date}
            onChange={formik.handleChange}
            error={formik.touched.date && Boolean(formik.errors.date)}
            helperText={formik.touched.date && formik.errors.date}
          />
        </Grid>
        <Grid item xs={12} md={1} sx={{ display: 'flex' }}>
          <ButtonGroup variant="text">
            <IconButton type="submit">
              <CheckIcon />
            </IconButton>
            <IconButton
              onClick={(e) => {
                formik.handleReset(e);
                clearHandler();
              }}
            >
              <ClearIcon />
            </IconButton>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EventForm;
