import {FaQuestion} from 'react-icons/fa'
import "../../App.css"
function Header() {
  return (
    <div className='header'>
        <div className='nav container'>
        <div className='logoPart '>
            <FaQuestion className='logo'/>
            <h1>Quiz-app</h1>
        </div>
        <div className="navbar">
            <ul id='menu'>
                <li><a href='/home'>Home</a></li>
                <li><a href='/about'>About</a></li>
            </ul>
        </div>
     </div>

    </div>
  )
}

export default Header