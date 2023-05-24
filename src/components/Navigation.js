import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import './Navagation.css';

const Navagation = () => {
  return (
    <AppBar position="static">
      <Toolbar className="nav-toolbar">
        <Typography variant="h4" component={RouterLink} to="/" className="nav-title">
          Employee Management System
        </Typography>
        <div>
          <Button color="inherit" component={RouterLink} to="/employees">
            Employees
          </Button>
          <Button color="inherit" component={RouterLink} to="/tasks">
            Tasks
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navagation;
