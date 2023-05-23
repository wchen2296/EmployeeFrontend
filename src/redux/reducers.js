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
      
      
      case 'CREATE_EMPLOYEE':
        return { ...state, employees: [...state.employees, action.payload] };
      case 'UPDATE_EMPLOYEE':
        return { ...state,employees: state.employees.map(employee => employee.id === action.payload.id ? action.payload : employee) };
      case 'DELETE_EMPLOYEE':
        return {   ...state,
          employees: state.employees.filter(e => e.id !== action.payload),  };
      case 'FETCH_TASKS':
        return { ...state, tasks: action.payload };
      case 'FETCH_TASK':
        return { ...state, task: action.payload };
      case 'EDIT_TASK':
        return { ...state, task: action.payload };
      case 'CREATE_TASK':
        return { ...state, tasks: [...state.tasks, action.payload] };    
      // Add more cases here 
      default:
        return state;
    }
  }
  
  export default rootReducer;
  