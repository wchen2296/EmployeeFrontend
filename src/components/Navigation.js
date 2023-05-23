import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Navigation = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Employee Management System
        </Typography>
        <Button color="inherit" component={RouterLink} to="/employees">
          Employees
        </Button>
        <Button color="inherit" component={RouterLink} to="/tasks">
          Tasks
        </Button>
        <Button color="inherit" component={RouterLink} to="/employees/new">
          Create Employee
        </Button>
        <Button color="inherit" component={RouterLink} to="/tasks/new">
          Create Task
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
