import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {

    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hey everyone!", likesCount: 1},
                {id: 2, message: "First post", likesCount: 200}
            ],
            newPostText: ""
        },

        dialogsPage: {
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
    },

    rerenderEntireTree() {
        console.log("this is rerender entire tree")
    },

    getState() {
        return this._state
    },

    _subscriber() {

    },
    subscribe(observer) {
        this._subscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._subscriber(this._state)
    }
}

window.store = store

export default store