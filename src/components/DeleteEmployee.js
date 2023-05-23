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
      setError('Cannot delete employee with assigned tasks.');
    }
  };

  return (
    <div>
      <button className="delete-button" onClick={handleDelete}>Delete</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default DeleteEmployee;
