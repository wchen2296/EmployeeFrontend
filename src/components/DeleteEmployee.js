import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteEmployee } from '../redux/actions';
import './ListStyle.css'

const DeleteEmployee = ({ id }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    try {
      await dispatch(deleteEmployee(id));
    } catch (err) {
      setError('Cannot delete employee with assigned tasks! Reassign or delete ALL associated tasks to delete.');
    }
  };

  return (
    <div>
      <button className="delete-button" onClick={handleDelete}>Delete Employee</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default DeleteEmployee;
