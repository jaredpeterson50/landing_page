import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/Footer.css';
export default function footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <FacebookIcon/>
            <LinkedInIcon/>
            <GitHubIcon/>
            <EmailIcon/>
        </div>
        <p>&copy;www.jaredpeterson50.com 2023</p>
    </div>
  )
}
