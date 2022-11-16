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

}

export const profileAPI = {

}