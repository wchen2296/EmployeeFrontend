import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { fetchTask, fetchEmployees, updateTask } from '../redux/actions';
import './DetailsStyle.css';
import { Button, TextField, Select, MenuItem, InputLabel } from '@mui/material';

const TaskDetails = () => {
  const dispatch = useDispatch();
  const task = useSelector((state) => state.task);
  const employees = useSelector((state) => state.employees);
  const { id } = useParams();

  const [editing, setEditing] = React.useState(false);
  const [description, setDescription] = React.useState('');
  const [priorityLevel, setPriorityLevel] = React.useState('');
  const [completionStatus, setCompletionStatus] = React.useState('');
  const [employeeId, setEmployeeId] = React.useState('');

  useEffect(() => {
    dispatch(fetchTask(id));
    dispatch(fetchEmployees());
  }, [dispatch, id]);

  useEffect(() => {
    if (task) {
      setDescription(task.description);
      setPriorityLevel(task.priorityLevel);
      setCompletionStatus(task.completionStatus);
      setEmployeeId(task.employeeId || '');
    }
  }, [task]);

  const handleSaveTask = () => {
    const updatedTask = {
      id: task.id,
      description,
      priorityLevel,
      completionStatus,
      employeeId: employeeId || null,
    };

    dispatch(updateTask(updatedTask))
      .then(() => {
        dispatch(fetchTask(task.id)); // Fetch the updated task data
      })
      .catch((error) => {
        console.error('Failed to update task:', error);
      });

    setEditing(false);
  };

  if (!task) {
    return <p>Loading...</p>;
  }

  return (
    <div className="card-container">
      {editing ? (
        <Button className="cancel-btn" onClick={() => setEditing(false)}>
          Cancel
        </Button>
      ) : (
        <div>
          <Button className="back-btn" component={RouterLink} to="/tasks">
            Back
          </Button>
       
        </div>
      )}
      <div className="card">
        <div className="card-content">
          {editing ? (
            <div className="edit-mode">
              <h2>Edit Task</h2>
              <TextField
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                label="Description"
                fullWidth
                margin="normal"
              />
              <TextField
                value={priorityLevel}
                onChange={(e) => setPriorityLevel(e.target.value)}
                label="Priority Level"
                fullWidth
                margin="normal"
              />
              <InputLabel htmlFor="completion-status-select">Completion Status</InputLabel>
              <Select
                value={completionStatus}
                onChange={(e) => setCompletionStatus(e.target.value)}
                fullWidth
                margin="normal"
                inputProps={{
                  name: 'completionStatus',
                  id: 'completion-status-select',
                }}
              >
                <MenuItem value="false">Not Completed</MenuItem>
                <MenuItem value="true">Completed</MenuItem>
              </Select>
              <InputLabel htmlFor="employee-select">Assign Employee</InputLabel>
              <Select
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
                fullWidth
                margin="normal"
                inputProps={{
                  name: 'employee',
                  id: 'employee-select',
                }}
              >
                <MenuItem value=""><em>None</em></MenuItem>
                {employees.map((employee) => (
                  <MenuItem key={employee.id} value={employee.id}>
                    {employee.firstName} {employee.lastName}
                  </MenuItem>
                ))}
              </Select>
              <Button onClick={handleSaveTask}>Save Task</Button>
            </div>
          ) : (
            <div className="card-header">
              <h2 className="card-title">{task.description}</h2>
              <p className="card-subtitle">Priority Level: {task.priorityLevel}</p>
              <p className="card-subtitle">
                Completion Status: {task.completionStatus ? 'Completed' : 'Not Completed'}
              </p>
              {task.employeeId ? (
                <div>
                  <p className="card-subtitle">
                    Assigned Employee: {task.employee.firstName} {task.employee.lastName}
                  </p>
                  <Button className="employee-details-btn" component={RouterLink} to={`/employees/${task.employeeId}`} variant="contained" color="primary">
                    Employee Details
                  </Button>
                </div>
              ) : (
                <p className="card-subtitle">No employee assigned</p>
              )}
            </div>
          )}
        </div>
      </div>
      {!editing && (
        <Button className="edit-btn" onClick={() => setEditing(true)}>
          Edit
        </Button>
      )}
    </div>
  );
};

export default TaskDetails;
