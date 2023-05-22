//App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import EmployeeList from './components/EmployeeList';
import EmployeeDetails from './components/EmployeeDetails';
//import TaskList from './components/TaskList';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          {/* might add a navbar */}
          <Routes>
            <Route path="/employees" component={EmployeeList} />
            <Route path="/employees/:id" element={<EmployeeDetails />} />
            {/*<Route path="/tasks" component={TaskList} />*/}
            {/* add more routes  */}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;


