import React from 'react'
import "../../App.css"
import {FaInstagram, FaGithub, FaLinkedinIn} from "react-icons/fa"
function Footer() {

    const year = new Date().getFullYear();
  return (
    <div className='footer'>
            <div className='nav container'>
            <div className="social">
                <FaInstagram  style={{margin:"5px"}}/>
                <a href="https://github.com/Atayev" target="_blank" rel='noreferrer'><FaGithub style={{margin:"5px"}}/></a>
                <a href="https://www.linkedin.com/in/atayevibrahim/" target="_blank" rel='noreferrer' ><FaLinkedinIn style={{margin:"5px"}}/></a>
            </div>
            <div className='copyright'>
                <p>Copyright &copy; {year} All rigths reserved</p>
            </div>   
            

            </div>
        
        </div>
  )
}

export default Footer