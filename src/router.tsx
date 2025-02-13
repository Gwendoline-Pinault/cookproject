import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import { Error } from "./components/Error";
import { RecipesList } from "./components/RecipesList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement : <Error />,
  },
  {
    path: '/recipes',
    element: <RecipesList />,
    errorElement: <Error />,
  }, 
])