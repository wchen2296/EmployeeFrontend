import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEmployee } from '../redux/actions';
import { useParams, Link as RouterLink  } from 'react-router-dom';
import './DetailsStyle.css';
import { Button } from '@mui/material';


const EmployeeDetails = () => {
  const dispatch = useDispatch();
  const { employeeId } = useParams();
   console.log('employeeId:', employeeId); 
  const employee = useSelector((state) => state.employee);


  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchEmployee(employeeId))
      .then(() => setLoading(false))
      .catch((error) => {
        console.error('Failed to fetch employee:', error);
        setLoading(false);  
      });
  }, [dispatch, employeeId]);
  

 
   return (
    loading || !employee ? <p>Loading...</p> : 
    
    <div class="card-container">
     <Button className='back-btn' component={RouterLink} to="/employees">
          Back
        </Button>
      <div className='card'>
        <div className='card-content'>
          <h2 className='card-title'>{employee.firstName} {employee.lastName}</h2>
          <p className='card-text'>Employee ID: {employee.id}</p>
          <p className='card-text'>Department: {employee.department}</p>
          {/* Add a list component to show employee's tasks if any */}
          {employee.tasks && employee.tasks.length > 0 ? (
            <div className='card-task-list'>
              <h3 className='card-subtitle'>Tasks:</h3>
              {employee.tasks.map((task) => (
                <p key={task.id} className='card-task'>{task.description}</p>
              ))}
            </div>
          ) : (
            <p className='card-text'>No tasks are assigned to this employee.</p>
          )}
        </div>
      </div>
      </div>
    );
};

export default EmployeeDetails;