import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"


let store = {

    _callSubscriber() { },

    _state: {
        profilePage: {
            posts: [
                { id: '1', message: 'hi', likes: 12 },
                { id: '2', message: 'HOW are u', likes: 12 },
                { id: '3', message: 'what', likes: 12 },
                { id: '4', message: 'yea', likes: 12 },
                { id: '5', message: 'yes', likes: 12 }
            ],
            newPostText: ""

        },
        dialogsPage: {
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

        },
        sidebar: {
            friends: [
                { id: '1', name: 'Alisher', },
                { id: '2', name: 'Inna' },
                { id: '3', name: 'Danil' },
            ]
        }
    },

    getState() {
        return this._state;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber (this._state)
 

    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
}

export default store;
window.store = store;