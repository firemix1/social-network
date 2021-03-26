import axios from "axios";

let instance = axios.create({
    withCredentials: true,
    headers: {"API-KEY": "208782fa-c6ee-42a9-bc64-c308bbcc13cb"},
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
        return profileApi.getProfileInfo(userId)
    }
}

export const profileApi = {
    getProfileInfo(userId) {
        return instance.get("profile/" + userId)
    },
    setStatus(status) {
        return instance.put("profile/status", {status})
    },
    getStatus(userId) {
        return instance.get("profile/status/" + userId)
    },
    updatePhoto(photo) {
        const formData = new FormData()
        formData.append("image", photo)
        return instance.put("profile/photo/", formData)
    }
}

export const authApi = {
    setAuthMe() {
        return instance.get("auth/me/")
    },
    login(email, password, rememberMe) {
        return instance.post("/auth/login", {email, password, rememberMe})
    },
    logout() {
        return instance.delete("/auth/login")
    }

}