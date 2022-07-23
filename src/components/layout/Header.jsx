import {FaQuestion} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import "../../App.css"
function Header() {
  return (
    <div className='header'>
        <div className='nav container'>
        <div className='logoPart '>
            <Link to='/home'>
              <FaQuestion className='logo'/>
            </Link>
            
        </div>
        <div className="navbar">
            <ul id='menu'>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </div>
     </div>

    </div>
  )
}

export default Header