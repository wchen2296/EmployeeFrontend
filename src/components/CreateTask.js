import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTask, fetchEmployees } from '../redux/actions';
import './CreateStyle.css';
import { Button, Snackbar } from '@mui/material';
import { Link } from 'react-router-dom';

const CreateTask = () => {
  const dispatch = useDispatch();
  const employees = useSelector(state => state.employees);
  const [formValues, setFormValues] = useState({
    description: '',
    priorityLevel: '',
    completionStatus: 'false',
    employeeId: null,
  });

  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleChange = (event) => {
    const value =
      event.target.name === 'employeeId' && event.target.value
        ? Number(event.target.value)
        : event.target.value;
    setFormValues({ ...formValues, [event.target.name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await dispatch(createTask(formValues)); // handle the promise returned by dispatch
    if (response) {
      setSuccessMessage('Task successfully created!');
    } else {
      setSuccessMessage('Failed to create task.');
    }
  };

  const handleSnackbarClose = () => {
    setSuccessMessage('');
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <h1>Create a Task</h1>
        <label className="label">Description:</label>
        <input
          type="text"
          name="description"
          value={formValues.description}
          onChange={handleChange}
          className="input"
        />
      </div>
      <div className="form-group">
        <label className="label">Priority Level:</label>
        <select
          name="priorityLevel"
          value={formValues.priorityLevel}
          onChange={handleChange}
          className="input"
        >
          <option value="">Select priority...</option>
          {[...Array(10).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>
              {num + 1}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label className="label">Employee ID:</label>
        <select
          name="employeeId"
          value={formValues.employeeId}
          onChange={handleChange}
          className="input"
        >
          <option value="">Assign to employee...</option>
          {employees.map((employee) => (
            <option key={employee.id} value={employee.id}>
              {employee.firstName} {employee.lastName}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="button">
        Create Task
      </button>
      <Snackbar
        open={!!successMessage}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message={successMessage}
      />
      <Button className="back-btn" component={Link} to="/tasks">
        Back
      </Button>
    </form>
  );
};

export default CreateTask;
