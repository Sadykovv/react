import dialogcss from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import React from 'react'

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = props.stateDialogs.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = props.stateDialogs.messagesData.map(m => <Message message={m.message} />)

    // let newMessageText = props.stateDialogs.newMessageText;



    let sendMessage = () =>
    {
       props.sendMessageActionCreator();
    }

    let onMessageChange = (e) =>
    {
       let text= e.target.value;
        props.updateNewMessageTextActionCreator(text);
    }

    return (
        <div className={dialogcss.dialogs}>
            <div className={dialogcss.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={dialogcss.messages}>
              <div>{messagesElements} </div>
                <div>
                <textarea onChange={onMessageChange} value={props.stateDialogs.newMessageText} placeholder='Enter your message'/>
                </div>
                <div>   
                     <button onClick={sendMessage}>send message</button>
                </div>
            
            </div>
        </div>
    )
}

export default Dialogs;

