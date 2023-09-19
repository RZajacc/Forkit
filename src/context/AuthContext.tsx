import { ReactNode, createContext, useState } from "react";
import { User } from "../types/types";

// ? TYPES
interface AuthContextType {
    user: User | null,
    setUser: (user: User) => void,
    login: () => void,
    logout: () => void,
}

const AuthInitContext = {
    user: null,
    setUser: () => console.log("user not yet defined"),
    login: () => console.log("User state not yet defined"),
    logout: () => console.log("User state not yet defined"),
}

interface AuthContextProviderProps {
    children: ReactNode,
}

// ? 1- Create a Context
export const AuthContext = createContext<AuthContextType>(AuthInitContext);


// ? 2- Define content of our store

export const AuthContextProvider = ({children}: AuthContextProviderProps) => {
    
    const [user, setUser] = useState<User | null>(null)

    const login = () => {
    setUser({
      name: 'John',
      lastName: 'Doe',
      email: 'j.doe@gmail.com',
      password: '12345',
    })
  }

  const logout = () => {
    setUser(null)
  }

    return (
        <AuthContext.Provider value={{user, setUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}