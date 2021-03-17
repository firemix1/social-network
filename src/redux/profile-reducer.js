const ADD_POST = "ADD-POST"
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"

let initialState = {
    posts: [
        {id: 1, message: "Hey everyone!", likesCount: 1},
        {id: 2, message: "First post", likesCount: 200}
    ],
    newPostText: "",
    profile: null
}

let profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            }
            return { ...state, posts: [...state.posts, newPost], newPostText: ""}

        case UPDATE_POST_TEXT:
            return  { ...state, newPostText: action.text}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        default: return state
    }
}
export const addPostActionCreator =() => ({ type: ADD_POST })
export const onPostChangeActionCreator = (text) => ({ type: UPDATE_POST_TEXT, text: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export default profileReducer