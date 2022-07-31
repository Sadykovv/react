import React from 'react'
import { sendMessageActionCreator ,updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    // let newMessageText = props.stateDialogs.newMessageText;



    let sendMessage = () =>
    {
       props.store.dispatch (sendMessageActionCreator());
    }

    let onMessageChange = (text) =>
    {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
       <Dialogs updateNewMessageTextActionCreator={onMessageChange} sendMessageActionCreator={sendMessage} dialogsPage={state} />
    )
}

export default DialogsContainer;

