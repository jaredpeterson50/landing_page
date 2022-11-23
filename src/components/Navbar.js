import React, {useState, useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'
import "../styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';


export default function Navbar() {
  const location = useLocation();
  console.log(location); //the location.key changes every time you change pages
  const [expandBar, setExpandBar] = useState(false);
//<button onClick={() => setExpandBar(true)}><ReorderIcon/></button>

  return (
    <div className="navbar" id="open">
        <div className="toggleButton">
            <button onClick={() => setExpandBar((prev)=>!prev)}><ReorderIcon/></button>
        </div>
        <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
        </div>
    </div>
  )
}
