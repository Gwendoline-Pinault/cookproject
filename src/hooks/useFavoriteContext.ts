import { createContext, useContext } from "react";
import { FavoriteObject } from "../pages/Favorites";

export type FavoritesType = {
  favorites: [],
  setFavorites: (object: FavoriteObject) => void;
  removeFavorites: () => void;
}

export const FavoriteContext = createContext<FavoritesType | []>([]);

export const useFavoriteContext = () => {
  const context = useContext(FavoriteContext);

  if (!context) {
    throw new Error("missing useFavoriteContext Provider");
  }

  return context;
}