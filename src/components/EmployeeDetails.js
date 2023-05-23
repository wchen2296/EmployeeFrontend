import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEmployee } from '../redux/actions';
import { useParams } from 'react-router-dom';


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
      <div>
        <h2>{employee.firstName} {employee.lastName}</h2>
        <p>{employee.department}</p>
        {/* Add a list component to show employee's tasks if any */}
        {employee.tasks && employee.tasks.length > 0 ? (
          <div>
            <h3>Tasks:</h3>
            {employee.tasks.map((task) => (
              <p key={task.id}>{task.description}</p>
            ))}
          </div>
        ) : (
          <p>No tasks are assigned to this employee.</p>
        )}
      
      </div>
    );
  
};

export default EmployeeDetails;
