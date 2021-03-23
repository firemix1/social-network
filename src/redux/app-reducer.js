import {setAuthMe} from "./auth-reducer";

const INITIALIZE_COMPLETED = "INITIALIZE_COMPLETED"

let initialState = {
    initialized: false
}

let appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_COMPLETED:
            return {...state, initialized: true}
        default:
            return state
    }
}
export const initializationCompleted = () => ({type: INITIALIZE_COMPLETED})

export const initializeFull = () => dispatch => {
    // let promise = dispatch(setAuthMe())
    // promise.then(() => {dispatch(initializationCompleted())})
    let promise = dispatch(setAuthMe())
    Promise.all([promise]).then(() => {
        dispatch(initializationCompleted())
    })
}
export default appReducer