import dialogcss from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import React from 'react'

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);

    let messagesElements = state.messagesData.map(m => <Message message={m.message} key={m.id} />)

    let newMessageText = state.newMessageText;



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
                <textarea onChange={onMessageChange} value={newMessageText} placeholder='Enter your message'/>
                </div>
                <div>   
                     <button onClick={sendMessage}>send message</button>
                </div>
            
            </div>
        </div>
    )
}

export default Dialogs;

