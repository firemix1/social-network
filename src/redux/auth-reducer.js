import {authApi, securityApi} from "../api/api";
import {FORM_ERROR} from "final-form";

const SET_AUTH_USER = "SET_AUTH_USER"
const SET_CAPTCHA = "SET_CAPTCHA"
let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

let authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_AUTH_USER:
            return {...state, ...action.data}
        case SET_CAPTCHA:
            return {...state, captchaUrl: action.captchaUrl}

        default:
            return state
    }
}
export const setAuthUser = (id, email, login, isAuth) => ({type: SET_AUTH_USER, data: {id, email, login, isAuth}})

export const setCaptcha = (captchaUrl) => ({type: SET_CAPTCHA, captchaUrl})

export const setAuthMe = () => async (dispatch) => {
    let response = await authApi.setAuthMe()
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setAuthUser(id, email, login, true))
    }
}

export const getCaptcha = () => async (dispatch) => {
    const response = await securityApi.getCaptchaUrl()
    const url = response.data.url
    dispatch(setCaptcha(url))

}

export const login = (email, password, rememberMe, captcha) => async dispatch => {
    let response = await authApi.login(email, password, rememberMe, captcha)

    if (response.data.resultCode === 0) {
        dispatch(setAuthMe())
    } else if (response.data.resultCode === 10) {
        dispatch(getCaptcha())
    } else {
        return {[FORM_ERROR]: 'login failed'}
    }
}

export const logout = () => async (dispatch) => {
    let response = await authApi.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUser(null, null, null, false))
    }
}

export default authReducer