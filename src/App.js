// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import EmployeeList from './components/EmployeeList';
import EmployeeDetails from './components/EmployeeDetails';
import TaskDetails from './components/TaskDetails';
import CreateEmployee from './components/CreateEmployee';
import CreateTask from './components/CreateTask';
import Navigation from './components/Navigation';
import TaskList from './components/TaskList';
import Home from './components/Home';


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navigation />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/employees" element={<EmployeeList />} />
            <Route path="/employees/new" element={<CreateEmployee />} />
            <Route path="/employees/:employeeId" element={<EmployeeDetails />} />
            <Route path='/tasks' element={<TaskList/>}/>
            <Route path="/tasks/new" element={<CreateTask />} />
            <Route path="/tasks/:id" element={<TaskDetails />} />
            
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
