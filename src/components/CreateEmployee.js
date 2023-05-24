import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createEmployee } from '../redux/actions';
import './CreateStyle.css';
import { Button, Snackbar } from '@mui/material';
import { Link } from 'react-router-dom';

const CreateEmployee = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [department, setDepartment] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createEmployee({ firstName, lastName, department }));
    setFirstName('');
    setLastName('');
    setDepartment('');
    setSuccessMessage('Employee created successfully!');
  };

  const handleSnackbarClose = () => {
    setSuccessMessage('');
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="label">First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          className="input"
          placeholder="First Name"
          required
        />
      </div>
      <div className="form-group">
        <label className="label">Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          className="input"
          placeholder="Last Name"
          required
        />
      </div>
      <div className="form-group">
        <label className="label">Department:</label>
        <input
          type="text"
          value={department}
          onChange={e => setDepartment(e.target.value)}
          className="input"
          placeholder="Department"
          required
        />
      </div>
      <button type="submit" className="button">
        Create Employee
      </button>
      <Button className='back-btn' component={Link} to="/employees">
        Back
      </Button>
      <Snackbar
        open={!!successMessage}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message={successMessage}
      />
    </form>
  );
};

export default CreateEmployee;
