const ADD_POST = "ADD-POST"
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT"

let initialState = {
    posts: [
        {id: 1, message: "Hey everyone!", likesCount: 1},
        {id: 2, message: "First post", likesCount: 200}
    ],
    newPostText: ""
}

let profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ""
            break;

        case UPDATE_POST_TEXT:
            state.newPostText = action.text
            break;
    }
    return state;
}
export const addPostActionCreator =() => ({ type: ADD_POST })
export const onPostChangeActionCreator = (text) => ({ type: UPDATE_POST_TEXT, text: text })

export default profileReducer