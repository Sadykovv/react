import * as axios from "axios"

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "75ede3ab-066d-404d-a6d9-22a4c6018ba9"
    }
})

export const usersAPI={
    getUsers(currentPage = 1, pageSize = 10)  {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        })
    }
}