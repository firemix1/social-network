const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT"

const dialogsReducer = (state, action) => {

    switch (action.type) {

        case ADD_MESSAGE:
            let mess = {
                id: 4,
                message: state.newMessageText
            }
            state.messages.push(mess)
            state.newMessageText = ""
            break;

        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.text
            break;
    }
    return state
}

export const sendMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const onMessageChangeActionCreator =(text) => ({ type: UPDATE_MESSAGE_TEXT, text: text})

export default dialogsReducer