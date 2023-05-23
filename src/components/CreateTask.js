import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from '../redux/actions';

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
    <form onSubmit={handleSubmit}>
      <label>
        Description:
        <input type="text" name="description" value={formValues.description} onChange={handleChange} />
      </label>
      <label>
        Priority Level:
        <input type="text" name="priorityLevel" value={formValues.priorityLevel} onChange={handleChange} />
      </label>
      <label>
        Completion Status:
        <input type="checkbox" name="completionStatus" checked={formValues.completionStatus} onChange={handleChange} />
      </label>
      <label>
        Employee ID:
        <input type="number" name="employeeId" value={formValues.employeeId} onChange={handleChange} />
      </label>
      <button type="submit">Create Task</button>
    </form>
  );
};

export default CreateTask;
