import { useContext } from "react"
import { AuthContext, Connexion } from "../AuthContext";

export const useAuthContext = ():Connexion => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext should be used into an AuthProvider.")
  }

  return context;
}