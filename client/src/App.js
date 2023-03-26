
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Authentication/Login';
import Registration from './pages/Authentication/Registration';
import Sidebar from './componets/Sidebar'
import Dashboard from './pages/hiru/Dashboard';
import Home from './pages/hiru/Home';
import Profile from './pages/hiru/Profile';
import MyCourses from './pages/hiru/MyCourses';
import Forum from './pages/hiru/Forum';
import Achivments from './pages/hiru/Achivments';
import Reports from './pages/hiru/Reports';
import Teachers from './pages/hiru/Teachers';
import Inquaries from './pages/hiru/Inquaries';
import Blog from './pages/hiru/Blog';
import Topbar from './componets/topbar/Topbar';

const App = () => {
  return (
    <BrowserRouter>
     <Sidebar>
     <Topbar/>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration/>} /> 
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/mycourses" element={<MyCourses />} />
          <Route path="/Forum" element={<Forum />} />
          <Route path="/achivments" element={<Achivments />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/inquaries" element={<Inquaries />} />
          <Route path="/blog" element={<Blog />} />
      </Routes>
      </Sidebar>
    </BrowserRouter>    
  );
};

export default App;

/*{ 
        




}*/