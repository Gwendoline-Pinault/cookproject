import { useState } from "react";
import { AuthProviderProps } from "./AuthContext"
import { FavoriteObject } from "./pages/Favorites";
import { FavoriteContext } from "./hooks/useFavoriteContext";

export const FavoritesProvider = ({children}: AuthProviderProps) => {
  const [favorites, setFavorites] = useState<Array<FavoriteObject>>([]);

  // remove the selected recipe from the favorites list
  const removeFavorites = (recipeId: number) => {
    if (favorites.length > 0){
      setFavorites(favorites.filter((recipe) => recipe.id !== recipeId));
    }
  }

  return (
    <FavoriteContext.Provider value={{favorites, setFavorites, removeFavorites}}>
      {children}
    </FavoriteContext.Provider>
  )
}