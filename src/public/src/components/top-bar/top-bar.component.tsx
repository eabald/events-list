// External
import React, { useState } from 'react';
// Components
import { AppBar, Toolbar, IconButton, Typography, Drawer, Container, Tooltip } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import AddEventForm from '../add-event-form/add-event-form.component';

/**
 * Homepage top bar with add event form drawer
 * @author Maciej Krawczyk
 * @component
 */
const TopBar: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };
  return (
    <>
      <AppBar position="fixed" elevation={17} sx={{ zIndex: 1201 }}>
        <Toolbar>
          <Tooltip title="Add event">
            <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }} onClick={toggleDrawer}>
              <AddIcon />
            </IconButton>
          </Tooltip>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Events List
          </Typography>
        </Toolbar>
        <Drawer
          anchor="top"
          open={drawerVisible}
          onClose={toggleDrawer}
          sx={{ top: '64px' }}
          hideBackdrop={true}
          classes={{ modal: 'drawer' }}
        >
          <Container sx={{ mt: 4, mb: 4 }}>
            <AddEventForm clearHandler={() => setDrawerVisible(false)} />
          </Container>
        </Drawer>
      </AppBar>
    </>
  );
};

export default TopBar;
