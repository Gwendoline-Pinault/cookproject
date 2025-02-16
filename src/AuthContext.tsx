import { createContext, ReactNode, useState } from "react";
import { User } from "./pages/Home";

export type Connexion = {
  isAuthenticate: boolean;
  signIn: (user: User) => void;
  signOut: () => void;
}

type AuthProviderProps = {
  children: ReactNode;
  isLoggedIn: boolean;
}

export const AuthContext = createContext<Connexion | undefined>(undefined);

export const AuthProvider = ({children, isLoggedIn}: AuthProviderProps) => {
  
  const [isAuthenticate, setIsAuthenticate] = useState(isLoggedIn || false);

  const signIn = ({username, password}: User) => {
    if (username === "Captain" && password === "Il0v3H3@lthy") {
      setIsAuthenticate(true);
    }
  }

  const signOut = () => setIsAuthenticate(false);

  return (
    <AuthContext.Provider value={{isAuthenticate, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  )
}