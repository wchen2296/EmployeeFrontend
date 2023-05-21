import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
//import TaskList from './components/TaskList';

const App = () => {
  return (
    <Router>
      <div>
        {/* might add a navbar */}
        <Routes>
          <Route path="/employees" component={EmployeeList} />
          {/*<Route path="/tasks" component={TaskList} />*/}
          {/* add more routes  */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
