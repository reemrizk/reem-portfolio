import React from 'react'
import '../App.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
    <div className='footer'>
        <div className='socials'>
            <LinkedInIcon /> 
            <GitHubIcon /> 
            <EmailIcon /> 
        
         </div>
        <p> &copy; 2023 Reem Rizk</p>
      
    </div>
  )
}

export default Footer
