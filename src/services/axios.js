import axios from "axios"

export const api = axios.create({
    baseURL: "https://cados.up.railway.app"
})

export const getAdvocates = () => {
    const response =  api.get("/advocates")
    return response
}

export const getAdvocate = (id) => {
    const response = api.get(`/advocates/${id}`)
    return response
}
