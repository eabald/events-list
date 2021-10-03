import { ListItem, Grid, ButtonGroup, IconButton, Typography } from '@mui/material';
import { Create as CreateIcon, Delete as DeleteIcon } from '@mui/icons-material';
import React, { useState } from 'react';
import EditEventForm from '../edit-event-form/edit-event-form.component';
import { useDispatch } from 'react-redux';
import { deleteEventStart } from '../../redux/events/events.actions';

interface EventsListItemProps {
  data: EventData;
}

/**
 * Event list item row
 * @author Maciej Krawczyk
 * @component
 * @param data event content
 */
const EventsListItem: React.FC<EventsListItemProps> = ({ data }) => {
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteEventStart(data.id || 0));
  };
  return (
    <ListItem>
      {editMode ? (
        <EditEventForm eventData={data} clearHandler={() => setEditMode(false)} />
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Typography>{data.firstName}</Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography>{data.lastName}</Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography>{data.email}</Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography>{new Date(data.date).toDateString()}</Typography>
          </Grid>
          <Grid item xs={12} md={1} sx={{ display: 'flex' }}>
            <ButtonGroup variant="text">
              <IconButton onClick={() => setEditMode(true)}>
                <CreateIcon />
              </IconButton>
              <IconButton onClick={handleDelete}>
                <DeleteIcon />
              </IconButton>
            </ButtonGroup>
          </Grid>
        </Grid>
      )}
    </ListItem>
  );
};

export default EventsListItem;
