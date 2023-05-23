import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from '../redux/actions';
import './CreateStyle.css'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const CreateTask = () => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    description: '',
    priorityLevel: '',
    completionStatus: '',
    employeeId: '',
  });

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createTask(formValues));
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
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
        <input
          type="text"
          name="priorityLevel"
          value={formValues.priorityLevel}
          onChange={handleChange}
          className="input"
        />
      </div>
      <div className="form-group">
        <label className="checkbox-label">
          Completion Status:
          <input
            type="checkbox"
            name="completionStatus"
            checked={formValues.completionStatus}
            onChange={handleChange}
            className="checkbox"
          />
        </label>
      </div>
      <div className="form-group">
        <label className="label">Employee ID:</label>
        <input
          type="number"
          name="employeeId"
          value={formValues.employeeId}
          onChange={handleChange}
          className="input"
        />
      </div>
      <button type="submit" className="button">Create Task</button>
      <Button className='back-btn' component={Link} to="/tasks">
          Back
        </Button>
    </form>
  );
};


export default CreateTask;
