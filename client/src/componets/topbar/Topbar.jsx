import { FaUser,FaBell,FaSearch } from "react-icons/fa";
import "./topbar.css";


export default function Topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
        <span className="logo"></span>
      </div>    
      <div className="topbarCenter">
        <div className="searchbar">
          <FaSearch className="searchIcon" />
          <input
            placeholder="Search "
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">About us</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <FaUser />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <FaBell />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="../images/user.jpg" alt="" className="topbarImg"/>
      </div>
    </div>
  );
}