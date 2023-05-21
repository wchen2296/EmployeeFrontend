import React, { useEffect, useState } from 'react';
import Employee from './Employee';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/employees')  
      .then(response => response.json())
      .then(data => setEmployees(data));
  }, []);

  if (employees.length === 0) {
    return <p>No employees exist</p>;
  }

  return (
    <div>
      <h1>Employees</h1>
      {employees.map(employee => (
        <Employee key={employee.id} employee={employee} />
      ))}
    </div>
  );
};

export default EmployeeList;
