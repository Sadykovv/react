import { NavLink } from 'react-router-dom';
import navbarcss from './Navbar.module.css'

console.log(navbarcss);

const Navbar = () => {
  return (
    <nav className={navbarcss.nav}>
      <div className={navbarcss.item}>
        <NavLink to="/Profile" className={navData => navData.isActive ? navbarcss.active:""} >Profile</NavLink>
      </div>
      <div className={navbarcss.item}>
        <NavLink to="/Dialogs" className={navData => navData.isActive ? navbarcss.active:""}>Dialogs</NavLink>
      </div>
      <div className={navbarcss.item}>
        <NavLink to="/Settings" className={navData => navData.isActive ? navbarcss.active:""}>Settings</NavLink>
      </div>
      <br/>
      <div className={navbarcss.item}>
        <NavLink to="/Friends" className={navData => navData.isActive ? navbarcss.active:""}>Friends</NavLink> <br/>
        Alisher 
        Danil 
        Inna <br/>
      </div>

    </nav>
  )
}
export default Navbar;