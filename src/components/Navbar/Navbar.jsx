import { NavLink } from 'react-router-dom';
import navbarcss from './Navbar.module.css'

console.log(navbarcss);

const Navbar = () => {
  return (
    <nav className={navbarcss.nav}>
      <div className={navbarcss.item}>
        <NavLink to="/profile" className={navData => navData.isActive ? navbarcss.active:""} >Profile</NavLink>
      </div>
      <div className={navbarcss.item}>
        <NavLink to="/dialogs" className={navData => navData.isActive ? navbarcss.active:""}>Dialogs</NavLink>
      </div>
      <div className={navbarcss.item}>
        <NavLink to="/settings" className={navData => navData.isActive ? navbarcss.active:""}>Settings</NavLink>
      </div>
      <div className={navbarcss.item}>
        <NavLink to="/users" className={navData => navData.isActive ? navbarcss.active:""}>Users</NavLink>
      </div>
      <br/>
      <div className={navbarcss.item}>
        <NavLink to="/friends" className={navData => navData.isActive ? navbarcss.active:""}>Friends</NavLink> <br/>
        Alisher 
        Danil 
        Inna <br/>
      </div>
    
    </nav>
  )
}
export default Navbar;