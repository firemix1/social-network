import {setAuthMe} from "./auth-reducer";

const INITIALIZE_COMPLETED = "INITIALIZE_COMPLETED"

let initialState = {
    initialized: false
}

let appReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case INITIALIZE_COMPLETED:
            return {...state, initialized: true}
        default:
            return state
    }
}
export const initializationCompleted = () => ({type: INITIALIZE_COMPLETED})

export const initializeFull = () => (dispatch: any) => {
    let promise = dispatch(setAuthMe())
    Promise.all([promise]).then(() => {
        dispatch(initializationCompleted())
    })
}
export default appReducer