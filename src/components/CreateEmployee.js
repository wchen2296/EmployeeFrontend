// CreateEmployee.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createEmployee } from '../redux/actions';

const CreateEmployee = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createEmployee({ firstName, lastName, department }));
    setFirstName('');
    setLastName('');
    setDepartment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        placeholder="First Name"
        required
      />
      <input
        type="text"
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        placeholder="Last Name"
        required
      />
      <input
        type="text"
        value={department}
        onChange={e => setDepartment(e.target.value)}
        placeholder="Department"
        required
      />
      <button type="submit">Create Employee</button>
    </form>
  );
};

export default CreateEmployee;
