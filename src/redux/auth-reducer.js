import {authApi} from "../api/api";
import {FORM_ERROR} from "final-form";

const SET_AUTH_USER = "SET_AUTH_USER"

let initialState = {
    // data: {
    id: null,
    email: null,
    login: null,
    isAuth: false
    // }
}

let authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_AUTH_USER:
            return {...state, ...action.data}

        default:
            return state
    }
}
export const setAuthUser = (id, email, login, isAuth) => ({type: SET_AUTH_USER, data: {id, email, login, isAuth}})

export const setAuthMe = () => {
    return (dispatch) => {
        return authApi.setAuthMe()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    dispatch(setAuthUser(id, email, login, true))
                }
            })
    }
}
export const login = (email, password, rememberMe) => dispatch => {
    return authApi.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthMe())
            }else {
                return {[FORM_ERROR]: 'login failed'}
            }
        })
        // .catch(() => {
        //     return {[FORM_ERROR]: 'login failed'}
        // })
}

export const logout = () => {
    return (dispatch) => {
        authApi.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUser(null, null, null, false))
                }
            })

    }
}


export default authReducer