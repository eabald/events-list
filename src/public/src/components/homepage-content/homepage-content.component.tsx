// External
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Redux
import { RootState } from '../../redux/root-reducer';
import { getEventsStart } from '../../redux/events/events.actions';
// Components
import { Box, Container, Typography, Divider, List } from '@mui/material';
import EventsListItem from '../events-list-item/events-list-items.component';
import { Add as AddIcon } from '@mui/icons-material';
import FlashOutput from '../flash-output/flash-output.component';

/**
 * Homepage main content wrapper
 * @author Maciej Krawczyk
 * @component
 */
const HomepageContent: React.FC = () => {
  const eventItems = useSelector((state: RootState) => state.events.events);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEventsStart());
  }, [dispatch]);
  return (
    <Box sx={{ mt: 12 }}>
      <Container component="main">
        <Typography variant="h2" component="h1">
          Current Events
        </Typography>
        <Divider />
        <FlashOutput />
        <List sx={{ width: '100%' }}>
          {eventItems.length ? (
            eventItems.map((event) => <EventsListItem key={event.id} data={event} />)
          ) : (
            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
              <span>No events found. Click</span>
              <AddIcon />
              <span>in navigation bar to add new.</span>
            </Typography>
          )}
        </List>
      </Container>
    </Box>
  );
};

export default HomepageContent;
