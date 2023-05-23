import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchTask } from '../redux/actions'; // Import the action

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
    <div>
      <h1>{task.description}</h1>
      <p>Priority Level: {task.priorityLevel}</p>
      <p>Completion Status: {task.completionStatus ? "Completed" : "Not Completed"}</p>
      {task.employee && <p>Assigned to: {task.employee.firstName} {task.employee.lastName}</p>}
      {/* Add a link to the task's edit form */}
    </div>
  );
};

export default TaskDetails;
