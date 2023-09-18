import { ReactNode, createContext, useState } from "react";
import { User } from "../types/types";

// ? TYPES
interface AuthContextType {
    user: User | null,
    setUser: (user:User)=> void,
}

const AuthInitContext = {
    user: null,
    setUser: () => console.log("user not yet defined")
}

interface AuthContextProviderProps {
    children: ReactNode,
}

// ? 1- Create a Context
export const AuthContext = createContext<AuthContextType>(AuthInitContext);


// ? 2- Define content of our store

export const AuthContextProvider = ({children}: AuthContextProviderProps) => {
    
    const [user, setUser] = useState<User | null>(null)

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}