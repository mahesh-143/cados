import axios from "axios"

export const api = axios.create({
  baseURL: "https://cados.up.railway.app",
})

export const getAdvocates = (currentPage) => {
  return api.get(`/advocates/?query=&page=${currentPage}`)
}

export const filteredResults = (query) => {
  return api.get(`advocates/?query=${query}`)
}

export const getAdvocate = (id) => {
  return api.get(`/advocates/${id}`)
}
