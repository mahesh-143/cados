import axios from "axios"

export const api = axios.create({
  baseURL: "https://cados.up.railway.app",
})

export const getAdvocates = () => {
  return api.get("/advocates")
}

export const filteredResults = (query) => {
  return api.get(`/advocates/?format=json&query=${query}`)
}

export const getAdvocate = (id) => {
  return api.get(`/advocates/${id}`)
}
