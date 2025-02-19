import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Error } from "./components/Error";
import { RecipesList } from "./pages/RecipesList";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./AuthContext";
import { Home } from "./pages/Home";
import { RecipeDetails } from "./pages/RecipeDetails";
import { App } from "./pages/App";

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement : <Error />,
      children: [
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
        }, 
        {
          path: '/recipes/:recipe',
          element:
          <ProtectedRoute>
            <RecipeDetails />
          </ProtectedRoute>,
          errorElement: <Error />,
        }
      ]
    }
  ])
  return (
    <AuthProvider isLoggedIn={false}>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}