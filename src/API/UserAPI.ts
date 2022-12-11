import {GetUsersResponseType} from "../Types/APITypes";
import {instance} from "./API";

export const userAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance
            .get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}