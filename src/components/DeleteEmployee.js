// DeleteEmployee.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteEmployee } from '../redux/actions';

const DeleteEmployee = ({ id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteEmployee(id));
  };

  return (
    <button onClick={handleDelete}>Delete Employee</button>
  );
};

export default DeleteEmployee;
