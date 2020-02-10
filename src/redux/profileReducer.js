const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

let initialState = {
    posts: [
        {id: 1, message: 'Hello, world!', likesCount: 15},
        {id: 2, message: "It's my first post.", likesCount: 21},
        {id: 3, message: "Do you like programming?", likesCount: 18}
    ],
    newPostText: ''
}

const profilerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {
                    id: 4, message: state.newPostText, likesCount: 0
                }]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state;
    }
}

export default profilerReducer;