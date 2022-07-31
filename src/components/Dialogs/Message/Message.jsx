import dialogcss from './../Dialogs.module.css'

const Message = (props) => {
    return <div className={dialogcss.message}>{props.message}</div>
}

export default Message;

