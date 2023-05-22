import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEmployee } from '../redux/actions';

const EmployeeDetails = ({ id }) => {
  const dispatch = useDispatch();
  const employee = useSelector((state) => state.employee);

  useEffect(() => {
    dispatch(fetchEmployee(id));
  }, [dispatch, id]);

  if (!employee) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{employee.firstName} {employee.lastName}</h2>
      <p>{employee.department}</p>
      {/* Add a list component to show employee's tasks if any */}
    </div>
  );
};

export default EmployeeDetails;
