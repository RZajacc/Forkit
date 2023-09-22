import { ReactNode, createContext, useState, useEffect } from "react";
import {User, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, GithubAuthProvider, linkWithPopup} from 'firebase/auth'
import { auth } from "../config/firebaseConfig";

// ? TYPES
interface AuthContextType {
    user: User | null,
    setUser: (user: User) => void,
    register: (email:string, password:string) => void,
    loginEmail: (email: string, password: string) => void,
    loginGoogle: () => void,
    loginGithub: () => void,
    loginFacebook: () => void,
    logout: () => void,
}

const AuthInitContext = {
    user: null,
    setUser: () => console.log("user not yet defined"),
    register: () => console.log("context not initialized"),
    loginEmail: () => console.log("User state not yet defined"),
    loginGoogle: () => console.log("User state not yet defined"),
    loginGithub: () => console.log("User state not yet defined"),
    loginFacebook: () => console.log("User state not yet defined"),
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

  // ! -------------TESTING GOOGLE LOGIN----------------
  const providerGoogle = new GoogleAuthProvider();
  const providerGithub = new GithubAuthProvider();
  const providerFacebook = new FacebookAuthProvider();

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
  
  const loginEmail = async (email: string, password: string) => {
      
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

  const loginGoogle = () => {
    signInWithPopup(auth, providerGoogle)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(credential)
        // The signed-in user info.
        // setUser(result.user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
      }
  
  const loginGithub = () => {
    signInWithPopup(auth, providerGithub)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log("Inside of github")
        // The signed-in user info.
        const user = result.user;
        setUser(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        console.log('Error Code', errorCode)
        console.log("Error message - ", errorMessage)
        console.log("Current user", auth.currentUser);
        // The email of the user's account used.
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        console.log('Credential', credential)
        // ...
      });
  }
  
  const loginFacebook = () => {
    signInWithPopup(auth, providerFacebook)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        console.log("Logged in as -> ", user)
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        console.log("Something went wrong")
        // ...
      });
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
        <AuthContext.Provider value={{user, setUser, loginEmail, loginGoogle, loginGithub, loginFacebook, logout, register}}>
            {children}
        </AuthContext.Provider>
    )
}