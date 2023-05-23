// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import EmployeeList from './components/EmployeeList';
import EmployeeDetails from './components/EmployeeDetails';
import TaskDetails from './components/TaskDetails';
import CreateEmployee from './components/CreateEmployee';
import EditEmployeeForm from './components/EditEmployeeForm';
import CreateTask from './components/CreateTask';
import EditTask from './components/EditTask';
import Navigation from './components/Navigation';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navigation />
          <Routes>
            <Route path="/employees" element={<EmployeeList />} />
            <Route path="/employees/new" element={<CreateEmployee />} />
            <Route path="/employees/edit/:id" element={<EditEmployeeForm />} />
            <Route path="/employees/:employeeId" element={<EmployeeDetails />} />
            <Route path='/tasks' element={<TaskList/>}/>
            <Route path="/tasks/new" element={<CreateTask />} />
            <Route path="/tasks/edit/:id" element={<EditTask />} />
            <Route path="/tasks/:id" element={<TaskDetails />} />
            {/* add more routes as needed */}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
