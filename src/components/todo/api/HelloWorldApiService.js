
import { apiClient } from "./ApiClient";




export const retreiveHelloWorldPathVariable= (username,token)=>
apiClient.get(`/hello-world/path-variable/${username}`
)

export const executeBasicAuthentication= (token)=>
apiClient.get(`/basicauth`,{
    headers:{
          Authorization:token
    }
})

export const retreiveHelloWorldBean= ()=>
apiClient.get('/hello-world-bean')