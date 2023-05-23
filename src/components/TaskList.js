import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks } from '../redux/actions'; // Import the action
import { Link } from 'react-router-dom';
import './ListStyle.css';
import { Button } from '@mui/material';
import DeleteTask from './DeleteTask';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  if (!tasks) {
    return <p>No Tasks Avaliable</p>;
  }

  return (
    <div className="list-container">
      <h1 className="list-title">Tasks: {tasks.length}</h1>
      <Button color="inherit" component={Link} to="/tasks/new">
          Create Task
        </Button>
      {tasks.map(task => (
        <div key={task.id} className="list-item">
          <h2>{task.description}</h2>
          <p>Task ID: {task.id}</p>
          <p>Priority Level: {task.priorityLevel}</p>
          <p>Completion Status: {task.completionStatus ? "Completed" : "Not Completed"}</p>
          
          <Link to={`/tasks/${task.id}`}><button className='details-button'>View Details</button></Link>
          <DeleteTask id={task.id}/>
          
        </div>
      ))}
    </div>
  );
};

export default TaskList;
