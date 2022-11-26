import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/Home.css';

export default function home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Jared</h2>
        <p className="prompt"> A Software Developer with a passion for learning</p>
        <LinkedInIcon/>
        <GitHubIcon/>
        <EmailIcon/>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              Javascript, HTML, CSS, React
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJs, Express, MongoDB, mySQL, AWS EC2, ISS, Apache, AWS serverless archatecture</span>
          </li>
          <li className="item">
            <h2>Language</h2>
            <span>Javascript, TypeScript, C++, C#, C, python, java</span>
          </li>
        </ol>
        

      </div>
    </div>
  )
}
