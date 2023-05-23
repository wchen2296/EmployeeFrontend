import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks } from '../redux/actions'; // Import the action
import { Link } from 'react-router-dom';
import './ListStyle.css';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  if (!tasks) {
    return <p>Loading...</p>;
  }

  return (
    <div className="list-container">
      <h1 className="list-title">Tasks</h1>
      {tasks.map(task => (
        <div key={task.id} className="list-item">
          <h2>{task.description}</h2>
          <p>Priority Level: {task.priorityLevel}</p>
          <p>Completion Status: {task.completionStatus ? "Completed" : "Not Completed"}</p>
          
          <Link to={`/tasks/${task.id}`}><button className='details-button'>View Details</button></Link>
          
        </div>
      ))}
    </div>
  );
};

export default TaskList;
