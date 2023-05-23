import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../redux/actions';
import './ListStyle.css'

const DeleteTask = ({ id }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    try {
      await dispatch(deleteTask(id));
    } catch (err) {
      setError('Cannot delete task.');
    }
  };

  return (
    <div>
      <button className="delete-button" onClick={handleDelete}>Delete Task</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default DeleteTask;
