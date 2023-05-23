import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks } from '../redux/actions'; // Import the action

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
    <div>
      <h1>Tasks</h1>
      {tasks.map(task => (
        <div key={task.id}>
          <h2>{task.description}</h2>
          <p>Priority Level: {task.priorityLevel}</p>
          <p>Completion Status: {task.completionStatus ? "Completed" : "Not Completed"}</p>
          {/* Add a link to the task's details page */}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
