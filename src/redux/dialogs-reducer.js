const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
    dialogsData: [
        { id: '1', name: 'Alisher' },
        { id: '2', name: 'Danil' },
        { id: '3', name: 'Karina' },
        { id: '4', name: 'Diana' },
        { id: '5', name: 'Renat' },
        { id: '6', name: 'Sveta' }
    ],
    messagesData: [
        { id: '1', message: 'hi' },
        { id: '2', message: 'HOW are u' },
        { id: '3', message: 'what' },
        { id: '4', message: 'yea' },
        { id: '5', message: 'yes' }
    ],
    newMessageText: ''

}

const dialogsReducer = (state=initialState, action) => {
    if (action.type === SEND_MESSAGE) {
        // let newMessage = {
        //     id: 'Inna',
        //     message: this._state.dialogsPage.newMessageText,
        // };
        let newMessage = state.newMessageText;
        state.messagesData.push({ id: 6, message: newMessage });
        state.newMessageText = '';

    }
    else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.newText;

    }
    return state;
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}
export default dialogsReducer