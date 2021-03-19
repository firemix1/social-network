import axios from "axios";

let instance = axios.create({
    withCredentials: true,
    headers: { "API-KEY": "208782fa-c6ee-42a9-bc64-c308bbcc13cb" },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
})

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 50) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId) {
        return instance.post("follow/" + userId)
    },
    unfollow(userId) {
        return instance.delete("follow/" + userId)
    },
    getProfileInfo(userId) {
        return instance.get("profile/" + userId)
    }
}
export const authApi = {
    setAuthMe(){
        return instance.get("auth/me/")
    }
}