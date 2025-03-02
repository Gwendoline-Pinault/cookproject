import { createContext, useContext } from "react";
import { FavoriteObject } from "../pages/Favorites";

export type FavoritesType = {
  favorites: Array<FavoriteObject>,
  setFavorites: (newArray: Array<FavoriteObject>) => void;
  removeFavorites: (recipeId: number) => void;
}

export const FavoriteContext = createContext<FavoritesType | undefined>(undefined);

export const useFavoriteContext = () => {
  const context = useContext(FavoriteContext);

  if (!context) {
    throw new Error("missing useFavoriteContext Provider");
  }

  return context;
}