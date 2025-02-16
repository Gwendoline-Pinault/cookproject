import { PropsWithChildren } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({children}: PropsWithChildren) => {
  const {isAuthenticate} = useAuthContext();

  if (!isAuthenticate) {
    return <Navigate to='/'/>
  }

  return children;
}