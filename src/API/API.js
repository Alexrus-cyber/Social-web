import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})


export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}

export const authAPI = {
    getMe() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    loginMe(email, password, rememberMe) {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(response => response.data)
    }
}

export const followAPI = {
    postFollow(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    deleteUnFollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/${id}`)
            .then(response => response.data)
    },
    getStatus(id) {
        return instance.get(`profile/status/${id}`)
            .then(response => response.data)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
            .then(response => response.data)
    },
    savePhoto(file) {
        let formData = new FormData();
        formData.append("image", file)

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data)
    },
    updateProfile(profile) {
        return instance.put(`profile`, profile)
            .then(response => response.data)
    }
}

export const dialogsAPI = {
    getDialogs() {
        return instance.get(`dialogs`)
            .then(response => response.data)
    },
}