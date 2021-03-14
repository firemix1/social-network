const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT"

let initialState = {
    dialogs: [
        {id: 1, name: "Dima"},
        {id: 2, name: "Kolya"}
    ],
    messages: [
        {id: 1, message: "Hello"},
        {id: 2, message: "Yey ill call u later"},
        {id: 3, message: "Do you know da way?"}
    ],
    newMessageText: ""
}

const dialogsReducer = (state = initialState, action) => {

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