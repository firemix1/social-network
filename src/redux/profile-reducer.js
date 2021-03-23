import {profileApi, usersApi} from "../api/api";

const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"

let initialState = {
    posts: [
        {id: 1, message: "Hey everyone!", likesCount: 1},
        {id: 2, message: "First post", likesCount: 200}
    ],
    profile: null,
    status: ""
}

let profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: action.text,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost]}

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}

        default:
            return state
    }
}
export const addPost = (text) => ({type: ADD_POST, text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const setProfileInfo = (userId) => {
    return (dispatch) => {
        usersApi.getProfileInfo(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}
export const setStatusMe = (status) => {
    return (dispatch) => {
        profileApi.setStatus(status)
            .then(response => {
                if (response.data.resultCode === 0)
                    dispatch(setStatus(status))
            })
    }
}
export const getStatus = (userId) => {
    return (dispatch) => {
        profileApi.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            })
    }
}

export default profileReducer