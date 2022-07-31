const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState={
    posts: [
        { id: '1', message: 'hi', likes: 12 },
        { id: '2', message: 'HOW are u', likes: 12 },
        { id: '3', message: 'what', likes: 12 },
        { id: '4', message: 'yea', likes: 12 },
        { id: '5', message: 'yes', likes: 12 }
    ],
    newPostText: ""
}


const profileReducer = (state=initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 12
            };

            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;

    }
}


export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
export default profileReducer