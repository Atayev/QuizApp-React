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
                <FaGithub style={{margin:"5px"}}/>
                <FaLinkedinIn style={{margin:"5px"}}/>
            </div>
            <div className='copyright'>
                <p>Copyright &copy; {year} All rigths reserved</p>
            </div>   
            

            </div>
        
        </div>
  )
}

export default Footer