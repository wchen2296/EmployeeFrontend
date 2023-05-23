import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTask, editTask } from '../redux/actions';

const EditTask = ({ id }) => {
  const dispatch = useDispatch();
  const task = useSelector(state => state.task);
  const [formValues, setFormValues] = useState({
    description: '',
    priorityLevel: '',
    completionStatus: '',
    employeeId: '',
  });

  useEffect(() => {
    dispatch(fetchTask(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (task) {
      setFormValues(task);
    }
  }, [task]);

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(editTask(id, formValues));
  };

  if (!task) {
    return <p>Loading...</p>;
  }

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
      <button type="submit">Update Task</button>
    </form>
  );
};

export default EditTask;
