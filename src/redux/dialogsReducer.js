const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const addMessageActionCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Marta'},
        {id: 2, name: 'Orest'},
        {id: 3, name: 'Liliana'},
        {id: 4, name: 'Maryna'},
    ],
    messages: [
        {id: 1, text: 'Hi!'},
        {id: 2, text: 'How are you?'},
        {id: 3, text: 'Where are you?'},
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = state.newMessageText;
            return {
                ...state,
                messages: [...state.messages, {id: 4, text: newMessage}]
            }
        }
        case
        UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newText
            }
        }
        default:
            return state;
    }
}

export default dialogsReducer;