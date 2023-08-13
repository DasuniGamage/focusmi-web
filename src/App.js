import React from 'react';
import Dashboard from './components/dashboard/Dashboard';
import Layout from './components/Shared/Layout';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Counsellors from './components/counsellors/Counsellors';
import Login from './Login';
import CoursesPage from './components/courses/CoursesPage';
import AddCounselors from './components/counsellors/AddCounsellors';


function App() {
  
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Layout/>}>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="counsellors" element={<Counsellors/>}/>
          <Route path="add-counsellors" element={<AddCounselors/>}/>
          <Route path="courses" element={<CoursesPage/>}/>

        </Route>
        <Route path="Login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
