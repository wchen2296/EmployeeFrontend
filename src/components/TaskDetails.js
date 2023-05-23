import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchTask } from '../redux/actions'; // Import the action
import './DetailsStyle.css';

const TaskDetails = () => {
  const dispatch = useDispatch();
  const task = useSelector((state) => state.task);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchTask(id));
  }, [dispatch, id]);

  if (!task) {
    return <p>Loading...</p>;
  }

  return (
    !task ? <p>Loading...</p> :
    <div class="card-container">
      <div className='card'>
        <div className='card-content'>
          <h1 className='card-title'>{task.description}</h1>
          <p className='card-text'>Priority Level: {task.priorityLevel}</p>
          <p className='card-text'>Completion Status: {task.completionStatus ? "Completed" : "Not Completed"}</p>
          {task.employee && <p className='card-text'>Employee Assigned to: {task.employee.firstName} {task.employee.lastName}</p>}
          {/* Add a link to the task's edit form */}
        </div>
      </div>
      </div>
  );
};

export default TaskDetails;