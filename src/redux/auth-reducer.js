const SET_AUTH_USER = "SET_AUTH_USER"

let initialState = {
    data: {
        id: null,
        email: null,
        login: null,
        isAuth: false
    }
}

let authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_AUTH_USER:
            return  { ...state, ...action.data, isAuth: true}

        default: return state
    }
}
export const setAuthUser = (id, email, login) => ({ type: SET_AUTH_USER, data: {id, email, login} })

export default authReducer