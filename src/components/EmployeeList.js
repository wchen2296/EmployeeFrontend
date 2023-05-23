// EmployeeList.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchEmployees } from '../redux/actions';
import Employee from './Employee';
import DeleteEmployee from './DeleteEmployee';
import { Link } from 'react-router-dom';

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
        <div key={employee.id}>
           
          <Employee employee={employee} />
          <DeleteEmployee id={employee.id} />
          <Link to={`/employees/${employee.id}`}>
            View Details
          </Link>
        </div>
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
