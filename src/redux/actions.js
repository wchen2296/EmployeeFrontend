// actions.js
//fetch all employees
export const fetchEmployees = () => {
    return (dispatch) => {
      fetch('http://localhost:3001/employees')
        .then(response => response.json())
        .then(data => {
          dispatch({
            type: 'FETCH_EMPLOYEES',
            payload: data
          });
        });
    };
  };
//fetch single employee
export const fetchEmployee = (id) => {
  return (dispatch) => {
    return fetch(`http://localhost:3001/employees/${id}`) 
      .then(response => response.json())
      .then(employee => dispatch({ type: 'FETCH_EMPLOYEE_SUCCESS', payload: employee }));
  };
};

//create employee
export function createEmployee(employee) {
  return async dispatch => {
    const response = await fetch('http://localhost:3001/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employee),
    });
    const data = await response.json();
    dispatch({ type: 'CREATE_EMPLOYEE', payload: data });
  };
}

//update employee
  export const updateEmployee = (updatedEmployee) => {
    return async (dispatch) => {
      try {
        const response = await fetch(`http://localhost:3001/employees/${updatedEmployee.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedEmployee)
        });
  
        if (!response.ok) {
          throw new Error('HTTP error ' + response.status);
        }
  
        const employee = await response.json();
        
        dispatch({ type: 'UPDATE_EMPLOYEE', payload: employee });
      } catch (error) {
        console.error('Failed to update employee:', error);
      }
    };
  };
//delete employee
export function deleteEmployee(id) {
  return async dispatch => {
    try {
      const response = await fetch(`http://localhost:3001/employees/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        if (response.status === 400) {
          throw new Error('Cannot delete employee with assigned tasks.');
        } else {
          throw new Error(`Delete request failed with status code ${response.status}`);
        }
      }

      dispatch({ type: 'DELETE_EMPLOYEE', payload: id });
    } catch (error) {
      throw error;
    }
  };
}

  
  //fetch all tasks
  export const fetchTasks = () => {
    return (dispatch) => {
      fetch('http://localhost:3001/tasks')
        .then(response => response.json())
        .then(data => {
          dispatch({
            type: 'FETCH_TASKS',
            payload: data
          });
        });
    };
  };
//fetch single task
  export function fetchTask(id) {
    return async (dispatch) => {
      try {
        const response = await fetch(`http://localhost:3001/tasks/${id}`);
        const data = await response.json();
        dispatch({ type: 'FETCH_TASK', payload: data });
      } catch (error) {
        console.error('Error:', error);
      }
    };
  }
//update task
  export function editTask(id, task) {
    return async (dispatch) => {
      try {
        const response = await fetch(`http://localhost:3001/tasks/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(task),
        });
        const data = await response.json();
        dispatch({ type: 'EDIT_TASK', payload: data });
      } catch (error) {
        console.error('Error:', error);
      }
    };
  }
  //create task
  export function createTask(task) {
    return async (dispatch) => {
      try {
        const response = await fetch(`http://localhost:3001/tasks`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(task),
        });
        const data = await response.json();
        dispatch({ type: 'CREATE_TASK', payload: data });
      } catch (error) {
        console.error('Error:', error);
      }
    };
  }
  
  //delete task
export function deleteTask(id) {
  return async dispatch => {
    try {
      const response = await fetch(`http://localhost:3001/tasks/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error(`Delete request failed with status code ${response.status}`);
      }

      dispatch({ type: 'DELETE_TASK', payload: id });
    } catch (error) {
      throw error;
    }
  };
}

  
  