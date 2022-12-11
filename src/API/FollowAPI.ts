import {ResponseGenericType} from "../Types/APITypes";
import {instance} from "./API";

export const followAPI = {
    postFollow(id: number) {
        return instance.post<ResponseGenericType>(`follow/${id}`)
            .then((response) => response.data)
    },
    deleteUnFollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    }
}