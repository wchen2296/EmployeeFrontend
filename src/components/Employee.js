import React from 'react';

const Employee = ({ employee = {} }) => {

  
  return (
    <div>
      <h2>{employee.firstName} {employee.lastName}</h2>
      <p>ID: {employee.id}</p>
      <p>Department: {employee.department}</p>
  
      
    </div>
  );
};


export default Employee;
