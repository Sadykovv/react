import * as axios from "axios"

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "866de327-b4e2-4820-82a8-45b546b3de71"
    }
})

export const usersAPI={
    getUsers(currentPage = 1, pageSize = 10)  {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        })
    }
}