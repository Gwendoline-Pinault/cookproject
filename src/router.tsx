import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Error } from "./components/Error";
import { RecipesList } from "./pages/RecipesList";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./AuthContext";
import { Home } from "./pages/Home";

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement : <Error />,
    },
    {
      path: '/recipes',
      element: 
        <ProtectedRoute>
          <RecipesList />
        </ProtectedRoute>,
      errorElement: <Error />,
      children: [],
    }, 
  ])
  return (
    <AuthProvider isLoggedIn={false}>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}