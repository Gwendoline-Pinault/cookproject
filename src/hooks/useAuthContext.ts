import { createContext, useContext } from "react"
import { User } from "../pages/Home";

export type Connexion = {
  isAuthenticate: boolean;
  signIn: (user: User) => void;
  signOut: () => void;
}

export const AuthContext = createContext<Connexion | undefined>(undefined);

export const useAuthContext = ():Connexion => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext should be used into an AuthProvider.")
  }

  return context;
}