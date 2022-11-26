import React, {useState, useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'
import "../styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

/*
useLocation updates every time the page url changes that is the dependant variable for the useEffect.
when you click something to change the page the drop menu goes away (expandBar(false)). When you click the hamberger
button the expadbar opens and closes respectively toggling. It is responsive for mobile and desktop view in CSS.

*/
export default function Navbar() {
  const location = useLocation();
  console.log(location); //the location.key changes every time you change pages
  const [expandBar, setExpandBar] = useState(false);
  useEffect(() =>{setExpandBar(false)}, [location]);
  return (
    <div className="navbar" id={expandBar?"open":"closed"}>
        <div className="toggleButton"><button onClick={() => setExpandBar((prev)=>!prev)}><ReorderIcon/></button></div>
        <div className="navLink"><Link to="/">Home</Link></div>
        <div className="navLink"><Link to="/projects">Projects</Link></div>
        <div className="navLink"><Link to="/experience">Experience</Link></div>
    </div>
  )
}
