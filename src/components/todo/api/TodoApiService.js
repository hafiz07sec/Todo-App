
import { apiClient } from "./ApiClient";




export const deleteTodoApi= (username,id)=>
apiClient.delete(`/users/${username}/todos/${id}`)

export const retreiveAllTodosForUsernameApi= (username)=>
apiClient.get(`/users/${username}/todos`)

export const retreiveTodoApi= (username,id)=>
apiClient.get(`/users/${username}/todos/${id}`)

export const updateTodoApi= (username,id, todo)=>
apiClient.put(`/users/${username}/todos/${id}`,todo)

export const createTodoApi= (username,todo)=>
apiClient.post(`/users/${username}/todos`,todo)