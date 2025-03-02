import { ReactNode, useState } from "react";
import { User } from "./pages/Home";
import { AuthContext } from "./hooks/useAuthContext";

export type AuthProviderProps = {
  children: ReactNode;
  isLoggedIn: boolean;
}

export const AuthProvider = ({children, isLoggedIn}: AuthProviderProps) => {
  const USERNAME = import.meta.env.VITE_APP_USERNAME;
  const PASSWORD = import.meta.env.VITE_APP_PASSWORD;
  
  const [isAuthenticate, setIsAuthenticate] = useState(isLoggedIn || false);

  const signIn = ({username, password}: User) => {
    if (username === USERNAME && password === PASSWORD) {
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