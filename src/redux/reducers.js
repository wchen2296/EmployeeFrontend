// reducers.js

const initialState = {
    employees: [],
    tasks: [],
    employee: null,
  };
  
  function rootReducer(state = initialState, action) {
    switch(action.type) {
      case 'FETCH_EMPLOYEES':
        return { ...state, employees: action.payload };
      case 'FETCH_EMPLOYEE_SUCCESS': 
        return { ...state, employee: action.payload };
      case 'FETCH_TASKS':
        return { ...state, tasks: action.payload };
      // Add more cases here 
      default:
        return state;
    }
  }
  
  export default rootReducer;
  