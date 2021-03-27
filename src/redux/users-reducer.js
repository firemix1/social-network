import {usersApi} from "../api/api";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROCESSING = "TOGGLE_IS_FOLLOWING_PROCESSING"

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId)
                        return {...u, followed: true}
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId)
                        return {...u, followed: false}
                    return u
                })
            }
        case SET_USERS:
            return {...state, users: action.users}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROCESSING:
            return {
                ...state,
                followingInProgress: action.isFollowingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleIsFetching = (toggle) => ({type: TOGGLE_IS_FETCHING, isFetching: toggle})
export const toggleFollowingProcessing = (isFollowingInProgress, userId) =>
    ({type: TOGGLE_IS_FOLLOWING_PROCESSING, isFollowingInProgress, userId})

export const requestUsers = (requestPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(requestPage))
        usersApi.getUsers(requestPage, pageSize).then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            }
        )
    }
}
export const unfollowUser = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProcessing(true, userId))
        usersApi.unfollow(userId)
            .then(response => {
                    if (response.data.resultCode === 0) {
                        dispatch(unfollow(userId))
                    }
                    dispatch(toggleFollowingProcessing(false, userId))
                }
            )
    }
}

export const followUser = (userId) => {
    return (dispatch) => {
        usersApi.follow(userId)
            .then(response => {
                    if (response.data.resultCode === 0)
                        dispatch(follow(userId))
                    dispatch(toggleFollowingProcessing(false, userId))
                }
            )
    }
}

export default usersReducer