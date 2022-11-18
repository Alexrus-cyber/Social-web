import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})


export const userAPI = {
    getUsers(currentPage, pageSize) {
        return  instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}

export const authAPI = {
    getMe(){
        return instance.get(`auth/me`)
               .then(response => response.data)
    }
}

export const followAPI = {
    postFollow(id){
        return instance.post(`/follow/${id}`)
               .then(response => response.data)
    },
    deleteUnFollow(id){
        return instance.delete(`/follow/${id}`)
               .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(id){
        return instance.get(`/profile/${id}`)
               .then(response => response.data)
    }
}