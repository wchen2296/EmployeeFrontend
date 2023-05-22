// actions.js
//fetch all employees
export const fetchEmployees = () => {
    return (dispatch) => {
      fetch('http://localhost:3001/api/employees')
        .then(response => response.json())
        .then(data => {
          dispatch({
            type: 'FETCH_EMPLOYEES',
            payload: data
          });
        });
    };
  };

  export const fetchEmployee = (id) => {
    return (dispatch) => {
      fetch(`http://localhost:3001/api/employees/${id}`)
        .then(response => response.json())
        .then(employee => dispatch({ type: 'FETCH_EMPLOYEE_SUCCESS', payload: employee }));
    };
  };
  
  
  export const fetchTasks = () => {
    return (dispatch) => {
      fetch('http://localhost:3001/api/tasks')
        .then(response => response.json())
        .then(data => {
          dispatch({
            type: 'FETCH_TASKS',
            payload: data
          });
        });
    };
  };
  