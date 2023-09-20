import { ReactNode, createContext, useState, useEffect } from "react";
import {User, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'
import { auth } from "../config/firebaseConfig";

// ? TYPES
interface AuthContextType {
    user: User | null,
    setUser: (user: User) => void,
    register: (email:string, password:string) => void,
    login: (email: string, password: string) => void,
    logout: () => void,
}

const AuthInitContext = {
    user: null,
    setUser: () => console.log("user not yet defined"),
    register: () => console.log("context not initialized"),
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
    
  const [user, setUser] = useState<User | null>(null);

    const register = async (email: string, password: string) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const registeredUser = userCredential.user;
        console.log("Registered user", registeredUser)
      } catch (error) {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("error", errorMessage);
      }
    }
  
  const login = async (email: string, password: string) => {
      
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const loggedUser = userCredential.user;
      setUser(loggedUser);
      console.log("Logged user", loggedUser)
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error ", errorMessage);
    }
  }
  
  const logout = () => {
    signOut(auth).then(() => {
      setUser(null);
      localStorage.removeItem('user');
    }).catch((error) => {
      console.log("Error :>>", error)
    });
    
  }

  const checkIfUserIsActive = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("User is still logged in");
        console.log("Uid :>>", uid);
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
      } else {
        console.log("User is logged out");
      }
    });
  }

  useEffect(() => {
    const localUser = localStorage.getItem('user');
    
    if (localUser != null) {
      const rememberedUser = JSON.parse(localUser);
      setUser(rememberedUser)
    }
    checkIfUserIsActive()
  }, [])
  

    return (
        <AuthContext.Provider value={{user, setUser, login, logout, register}}>
            {children}
        </AuthContext.Provider>
    )
}