import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateEmployee } from '../redux/actions';

const EditEmployeeForm = ({ employee }) => {
  const dispatch = useDispatch();
  
  const [firstName, setFirstName] = useState(employee.firstName);
  const [lastName, setLastName] = useState(employee.lastName);
  const [department, setDepartment] = useState(employee.department);
  const [tasks, setTasks] = useState(employee.tasks);
  const [task, setTask] = useState('');

  // real-time validation
  const [errors, setErrors] = useState({});

  useEffect(() => {
    validateForm();
  }, [firstName, lastName, department]);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleRemoveTask = (taskToRemove) => {
    setTasks(tasks.filter((task) => task !== taskToRemove));
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!firstName.trim()) tempErrors.firstName = 'First name is required';
    if (!lastName.trim()) tempErrors.lastName = 'Last name is required';
    if (!department.trim()) tempErrors.department = 'Department is required';
    setErrors(tempErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (Object.keys(errors).length === 0) {
      const updatedEmployee = {
        id: employee.id,
        firstName,
        lastName,
        department,
        tasks
      };
      
      // Dispatch the updateEmployee action when form is submitted
      dispatch(updateEmployee(updatedEmployee));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" value={firstName} onChange={handleFirstNameChange} />
        {errors.firstName && <div>{errors.firstName}</div>}
      </label>
      <label>
        Last Name:
        <input type="text" value={lastName} onChange={handleLastNameChange} />
        {errors.lastName && <div>{errors.lastName}</div>}
      </label>
      <label>
        Department:
        <input type="text" value={department} onChange={handleDepartmentChange} />
        {errors.department && <div>{errors.department}</div>}
      </label>
      <label>
        Task:
        <input type="text" value={task} onChange={handleTaskChange} />
        <button type="button" onClick={handleAddTask}>Add Task</button>
      </label>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button type="button" onClick={() => handleRemoveTask(task)}>Remove</button>
          </li>
        ))}
      </ul>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default EditEmployeeForm;
