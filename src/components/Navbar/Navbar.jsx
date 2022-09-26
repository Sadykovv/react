import { NavLink } from 'react-router-dom';
import navbarcss from './Navbar.module.css'


const Navbar = () => {
  return (
    <nav className={navbarcss.nav}>
      <div className={navbarcss.item}>
        <NavLink to="/profile" activeClassName={navbarcss.active} >Profile</NavLink>
      </div>
      <div className={navbarcss.item}>
        <NavLink to="/dialogs" activeClassName={navbarcss.active}>Dialogs</NavLink>
      </div>
      <div className={navbarcss.item}>
        <NavLink to="/settings" activeClassName={navbarcss.active}>Settings</NavLink>
      </div>
      <div className={navbarcss.item}>
        <NavLink to="/users" activeClassName={navbarcss.active}>Users</NavLink>
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