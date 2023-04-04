
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Authentication/Login';
import Registration from './pages/Authentication/Registration';
import Forgotpassword from './pages/Authentication/Forgotpassword';
import Verification from './pages/Authentication/Verification';
import Emailconfirm from './pages/Authentication/Emailconfirm'; 
import SuccesfulPwReset from './pages/Authentication/SuccesfulPwReset';
import NewPaswd from './pages/Authentication/NewPaswd';



const App = () => {
  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Registration" element={<Registration/>} /> 
          <Route path="/Forgotpassword" element={<Forgotpassword />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/emailconfirm" element={<Emailconfirm />} />
          <Route path="/newpassword" element={<NewPaswd/>} />
          <Route path="/successfulreset" element={<SuccesfulPwReset/>} />
      </Routes>     
    </BrowserRouter>    
  );
};

export default App;

/*{ 
 <Sidebar>
     <Topbar/>
     </Sidebar>
       <Route path="/mycourses" element={<MyCourses />} />
          <Route path="/Forum" element={<Forum />} />
          <Route path="/achivments" element={<Achivments />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/inquaries" element={<Inquaries />} />
          <Route path="/blog" element={<Blog />} />
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
}*/