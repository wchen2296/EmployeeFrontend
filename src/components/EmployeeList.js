// EmployeeList.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchEmployees } from '../redux/actions';
import Employee from './Employee';
import DeleteEmployee from './DeleteEmployee';
import { Link  } from 'react-router-dom';
import './ListStyle.css';
import { Button } from '@mui/material';

const EmployeeList = ({ dispatch, employees }) => {
  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  if (!employees || employees.length === 0) {
    return <p>No employees exist</p>;
  }

  return (
    <div className="list-container">
      <h1 className="list-title">Employees: {employees.length} </h1>
      <Button color="primary" variant='contained' component={Link} to="/employees/new">
          Create Employee
        </Button>
      <div className="list-grid">
        {employees.map((employee) => (
          <div key={employee.id} className="list-item">
            <Employee employee={employee} />
            <Link to={`/employees/${employee.id}`}>
              <button className="details-button">View Details</button>
            </Link>
            <DeleteEmployee id={employee.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    employees: state.employees,
  };
};

export default connect(mapStateToProps)(EmployeeList);
