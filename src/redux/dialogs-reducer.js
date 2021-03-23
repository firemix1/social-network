const ADD_MESSAGE = "ADD-MESSAGE"

let initialState = {
    dialogs: [
        {id: 1, name: "Dima"},
        {id: 2, name: "Kolya"}
    ],
    messages: [
        {id: 1, message: "Hello"},
        {id: 2, message: "Yey ill call u later"},
        {id: 3, message: "Do you know da way?"}
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let mess = {
                id: 4,
                message: action.text
            }
            return {...state, messages: [...state.messages, mess]}

        default:
            return state
    }
}

export const sendMessage = (text) => ({type: ADD_MESSAGE, text})

export default dialogsReducer