import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@mui/material';
import './HomeStyle.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Employee Management System</h1>
      <h3 color='gray'>Click to see list of employees and tasks</h3>
      <Button variant="contained" color="primary" component={RouterLink} to="/employees">Employees List</Button>
      <Button variant="contained" color="primary" component={RouterLink} to="/tasks">Tasks List</Button>
    </div>
  );
};

export default Home;
