import {profileApi, usersApi} from "../api/api";

const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"
const SET_PHOTO = "SET_PHOTO"

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
        case SET_PHOTO:
            return {...state, profile: {...state.profile, photos: action.photos}}

        default:
            return state
    }
}
export const addPost = (text) => ({type: ADD_POST, text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const setPhotoSuccess = (photos) => ({type: SET_PHOTO, photos})

export const setProfileInfo = (userId) => async (dispatch) => {
    let response = await usersApi.getProfileInfo(userId)
    dispatch(setUserProfile(response.data))
}

export const setPhoto = (photo) => async (dispatch) => {
    let response = await profileApi.updatePhoto(photo)
    if (response.data.resultCode === 0) {
        dispatch(setPhotoSuccess(response.data.data.photos))
    }
}

export const setStatusMe = (status) => async (dispatch) => {
    let response = await profileApi.setStatus(status)
    if (response.data.resultCode === 0)
        dispatch(setStatus(status))
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileApi.getStatus(userId)
    dispatch(setStatus(response.data))
}


export default profileReducer