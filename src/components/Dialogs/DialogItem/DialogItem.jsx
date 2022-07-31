import dialogcss from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return <div className={dialogcss.dialog + ' ' + dialogcss.active}>
        <div className={dialogcss.item}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg' />
                </div>
        <NavLink to={"/Dialogs/" + props.id}>  {props.name}</NavLink>
    </div>
}

export default DialogItem;

