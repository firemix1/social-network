import axios from "axios";

let instance = axios.create({
    withCredentials: true,
    headers: {"API-KEY": "7655abce-3169-48f4-a161-0cc79103598f"},
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
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post("/auth/login", {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete("/auth/login")
    }

}
export const securityApi = {
    getCaptchaUrl() {
        return instance.get("security/get-captcha-url")
    }
}