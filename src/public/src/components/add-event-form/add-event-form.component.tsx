import React from 'react';
import { useDispatch } from 'react-redux';
import { createEventStart } from '../../redux/events/events.actions';
import EventForm from '../event-form/event-form.component';

interface AddEventFormProps {
  clearHandler: () => void;
}

const AddEventForm: React.FC<AddEventFormProps> = ({ clearHandler }) => {
  const dispatch = useDispatch();
  const submitHandler = (values: EventData) => {
    dispatch(createEventStart(values));
    clearHandler();
  };
  return (
    <EventForm
      initialValues={{ firstName: '', lastName: '', email: '', date: '' }}
      submitHandler={submitHandler}
      clearHandler={clearHandler}
    />
  );
};

export default AddEventForm;
