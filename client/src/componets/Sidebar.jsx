import React, { useState } from 'react';
import {
    FaHome, 
    FaTh,
    FaBars,
    FaUserAlt, 
    FaGraduationCap, 
    FaFileAlt, 
    FaAward, 
    FaFileContract,
    FaUserFriends,
    FaRegCommentAlt,
    FaPen,
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<FaHome/>
        },
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/profile",
            name:"Profile",
            icon:<FaUserAlt/>
        },
        {
            path:"/mycourses",
            name:"My courses",
            icon:<FaGraduationCap/>
        },
     
        {
            path:"/Forum",
            name:"Community Forum",
            icon:<FaFileContract/>
        },
        {
            path:"/achivments",
            name:"Achivments",
            icon:<FaAward/>
        },
        {
            path:"/reports",
            name:"Reports",
            icon:<FaFileAlt/>
        },
        {
            path:"/teachers",
            name:"Teachers",
            icon:<FaUserFriends/>
        },
        {
            path:"/EduVideoSection",
            name:"Edu-VideoSec",
            icon:<OndemandVideoIcon/>
        },
        {
            path:"/inquaries",
            name:"Inquaries",
            icon:<FaRegCommentAlt/>
        },
        {
            path:"/blog",
            name:"Blog",
            icon:<FaPen/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Edulab PRO</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;