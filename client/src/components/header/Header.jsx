import "./header.css"
import mtn from "./mtn1.jpg"

const Header = () => {
  return (
    <div className='header'>
        <div className='headerTitles'>
        <span className='headerTitleSm'>React & Node</span>
        <span className='headerTitleLg'>Blog</span>
        </div>
        <img className='headerImg' src={mtn} alt="" />
    </div>
  )
}

export default Header