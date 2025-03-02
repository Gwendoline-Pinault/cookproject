import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Error } from "./components/Error";
import { RecipesList } from "./pages/RecipesList";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./AuthContext";
import { Home } from "./pages/Home";
import { RecipeDetails } from "./pages/RecipeDetails";
import { App } from "./pages/App";
import { Favorites } from "./pages/Favorites";
import { FavoritesProvider } from "./FavoritesContext";

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
          path: '/recipes/:id',
          element:
          <ProtectedRoute>
            <RecipeDetails />
          </ProtectedRoute>,
          errorElement: <Error />,
        },
        {
          path: '/favorites',
          element: 
          <ProtectedRoute>
            <Favorites />
          </ProtectedRoute>,
          errorElement: <Error />,
        }
      ]
    }
  ])
  return (
    <AuthProvider isLoggedIn={false}>
      <FavoritesProvider isLoggedIn={false}>
        <RouterProvider router={router} />
      </FavoritesProvider>
    </AuthProvider>
  )
}