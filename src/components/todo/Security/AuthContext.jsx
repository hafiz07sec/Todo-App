import { createContext, useContext, useState } from "react";

//1. Create a context
export const AuthContext = createContext();

export const useAuth=()=>useContext(AuthContext);

//put some state in the context
//2. share the created contxt with other components


export default function AuthProvider({ children }) {

const [isAuthenticated, setAuthenticated] = useState(false);

    function login(username, password){
        if (username === 'hafiz' && password === 'dummy') {
            setAuthenticated(true);
            return true;
           
        }
        else {
            setAuthenticated(false);
            return false;
            
        }
    }

    function logout(){
        setAuthenticated(false);
    }
  
    return (
        <AuthContext.Provider value={{ isAuthenticated, login ,logout}}>
            {children}
        </AuthContext.Provider>
    )
}
