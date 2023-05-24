import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEmployee, fetchUnassignedTasks } from '../redux/actions';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './DetailsStyle.css';
import { Button, TextField, Select, MenuItem, InputLabel } from '@mui/material';

const EmployeeDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { employeeId } = useParams();
  const employee = useSelector((state) => state.employee);
  const unassignedTasks = useSelector((state) => state.unassignedTasks);

  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [department, setDepartment] = useState('');
  const [newTaskId, setNewTaskId] = useState('');

  useEffect(() => {
    dispatch(fetchEmployee(employeeId))
      .then((response) => {
        setLoading(false);
        setFirstName(response.firstName);
        setLastName(response.lastName);
        setDepartment(response.department);
      })
      .catch((error) => {
        console.error('Failed to fetch employee:', error);
        setLoading(false);
      });
    dispatch(fetchUnassignedTasks());
  }, [dispatch, employeeId]);

  const handleSaveTask = () => {
    if (newTaskId) {
      fetch(`http://localhost:3001/employees/${employeeId}/task/${newTaskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ employeeId }),
      })
        .then(() => {
          setEditing(false);
          setNewTaskId('');
          dispatch(fetchEmployee(employeeId)); // Refresh the employee data
          dispatch(fetchUnassignedTasks()); // Refresh the unassigned tasks data
        })
        .catch((error) => {
          console.error('Failed to assign task:', error);
        });
    }
  };

  const handleSaveEmployee = () => {
    fetch(`http://localhost:3001/employees/${employeeId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        department,
      }),
    })
      .then(() => {
        setEditing(false);
        dispatch(fetchEmployee(employeeId)); // Refresh the employee data
      })
      .catch((error) => {
        console.error('Failed to save employee details:', error);
      });
  };

  const handleUnassignTask = (taskId) => {
    fetch(`http://localhost:3001/tasks/${taskId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ employeeId: null }),
    })
      .then(() => {
        dispatch(fetchEmployee(employeeId)); // Refresh the employee data
        dispatch(fetchUnassignedTasks()); // Refresh the unassigned tasks data
      })
      .catch((error) => {
        console.error('Failed to unassign task:', error);
      });
  };

  return (
    loading || !employee ? (
      <p>Loading...</p>
    ) : (
      <div className="card-container">
        {editing ? (
          <Button className='cancel-btn' onClick={() => setEditing(false)}>
            Cancel
          </Button>
        ) : (
          <Button className='back-btn' onClick={() => navigate(-1)}>
            Back
          </Button>
        )}
        <div className='card'>
          <div className='card-content'>
            {editing ? (
              <div className="edit-mode">
                <h2>Edit {employee.firstName} Info</h2>
                <TextField
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  label="First Name"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  label="Last Name"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  label="Department"
                  fullWidth
                  margin="normal"
                />
                {unassignedTasks && unassignedTasks.length > 0 && (
                  <>
                    <InputLabel htmlFor="assign-task-select">Assign New Task</InputLabel>
                    <Select
                      value={newTaskId || ''}
                      onChange={(e) => setNewTaskId(e.target.value)}
                      fullWidth
                      margin="normal"
                      inputProps={{
                        name: 'assignTask',
                        id: 'assign-task-select',
                      }}
                    >
                      <MenuItem value=""><em>None</em></MenuItem>
                      {unassignedTasks.map((task) => (
                        <MenuItem value={task.id} key={task.id}>{task.description}</MenuItem>
                      ))}
                    </Select>
                  </>
                )}
                <Button onClick={handleSaveTask} variant="contained" color="primary">Save Task</Button>
                <Button onClick={handleSaveEmployee} variant="contained" color="secondary">Save Employee Info</Button>
              </div>
            ) : (
              <>
                <div className='card-header'>
                  <h1 className='card-title'>{employee.firstName} {employee.lastName}</h1>
                  <p className='card-subtitle'>Employee ID: {employee.id}</p>
                  <p className='card-subtitle'>Department: {employee.department}</p>
                </div>
                {employee.tasks && employee.tasks.length > 0 ? (
                  <div className='card-task-list'>
                    <h2 className='card-subtitle'>Tasks:</h2>
                    {employee.tasks.map((task) => (
                      <div key={task.id} className='card-task'>
                        <p className="task-name">{task.description}</p>
                        <Button
                          className="unassign-btn"
                          onClick={() => handleUnassignTask(task.id)}
                          variant="contained"
                          color="error"
                        >
                          Unassign
                        </Button>
                        <Button
                          component={Link}
                          to={`/tasks/${task.id}`}
                          variant="contained"
                          color="primary"
                        >
                          Task Details
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className='card-text'>No tasks are assigned to this employee.</p>
                )}
              </>
            )}
          </div>
        </div>
        {!editing && (
          <Button className='edit-btn' onClick={() => setEditing(true)}>
            Edit
          </Button>
        )}
      </div>
    )
  );
};

export default EmployeeDetails;
