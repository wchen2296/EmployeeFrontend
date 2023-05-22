// EmployeeList.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchEmployees } from '../redux/actions';
import Employee from './Employee';

const EmployeeList = ({ dispatch, employees }) => {
  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  if (!employees || employees.length === 0) {
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

const mapStateToProps = (state) => {
  return {
    employees: state.employees,
  };
};

export default connect(mapStateToProps)(EmployeeList);
