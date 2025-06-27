import React, { useState, useEffect, useContext } from "react";
import StateContext from "./StateProvider";
import { NavLink , Link} from "react-router-dom";
import './navbar.css';
import CloseContext from "./CloseProvider";


function Navbar() {
  const [get , set] = useContext(StateContext);
    const [flag, setFlag] = useContext(CloseContext);
  
  return (
    <div className="navbar">
      <ul>
        <li style={{background:'none', display:'flex', gap:'20px',alignItems:'center'}}><img src="https://i.pinimg.com/474x/97/44/47/974447fefc6349711ac039577843292f.jpg" alt="note find" width={"50px"} style={{borderRadius:'50%'}} height={'50px'} /><b style={{fontSize:'2rem'}}>Coding</b></li>
      </ul>
      <ul >
        <li><ThemeToggleIcon size={20} /></li>
        <li onClick={()=> setFlag(0)}>Home</li>
        <li onClick={()=> setFlag(5)}>Contact</li>
        <li>Projects ▾
            <ul className="inner-ul">

            <li><NavLink className="link" to="/java-tutorial" >Portfolio</NavLink></li>
            <li onClick={()=> set(0)}>Resume</li>
            <li><NavLink className="link" to="/JavaScript-tutorial">E-Learning Platform (MERN Stack)</NavLink></li>
            <li><NavLink className="link" to="/Python-tutorial">Canteen Management System</NavLink></li>
            <li><NavLink className="link" to="/Reactjs-tutorial" >Exhibition Ticket Booking System</NavLink></li>
            <li><NavLink className="link" to="/SQL-tutorial">Form Handler</NavLink></li>
            <li><NavLink className="link" to="/java-dsa">My Notes</NavLink></li>
          </ul>
        </li>
        
      </ul>
    </div>
  );
}



const ThemeToggleIcon = ({size = 48}) => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);

    document.body.classList.toggle("dark", !isDark);
  };

  useEffect(()=>{
      toggleTheme();
  },[])

  return (
    <div onClick={toggleTheme} style={{ cursor: "pointer" }}>
      {isDark ? (
        // 🌙 Moon Icon
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21 12.79A9 9 0 0111.21 3 7 7 0 1012 21a9 9 0 009-8.21z" />
        </svg>
      ) : (
        // ☀️ Sun Icon
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2" />
          <path d="M12 21v2" />
          <path d="M4.22 4.22l1.42 1.42" />
          <path d="M18.36 18.36l1.42 1.42" />
          <path d="M1 12h2" />
          <path d="M21 12h2" />
          <path d="M4.22 19.78l1.42-1.42" />
          <path d="M18.36 5.64l1.42-1.42" />
        </svg>
      )}
    </div>
  );
};
export default Navbar;
