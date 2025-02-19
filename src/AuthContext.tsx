import { ReactNode, useState } from "react";
import { User } from "./pages/Home";
import { AuthContext } from "./hooks/useAuthContext";

type AuthProviderProps = {
  children: ReactNode;
  isLoggedIn: boolean;
}

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