//employee.js
import React from 'react';

const Employee = ({ employee }) => {
  return (
    <div>
      <h2>{employee.firstName} {employee.lastName}</h2>
      <p>{employee.department}</p>
    </div>
  );
};

export default Employee;
