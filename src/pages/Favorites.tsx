import { NavLink } from "react-router-dom";
import { useFavoriteContext } from "../hooks/useFavoriteContext";
import { useState } from "react";

export type FavoriteObject = {
  id: number;
  thumbnail_url: string;
  name: string;
}

export const Favorites:React.FunctionComponent = () => {
  const {favorites, removeFavorites} = useFavoriteContext();

  return (
    <main className="h-full flex flex-col items-center pb-5">
      <h1 className="text-2xl font-bold text-center my-4 text-emerald-600 mb-10">My Favorites</h1>

      <section className="flex flex-wrap w-[90%]">
        {favorites.length > 0 ? 
            favorites.map((item) => 
              <div className="p-5 w-70 h-70 flex flex-col" key={item.id}>
                <NavLink to={"/recipes/" + item.id} className="border-1 border-emerald-500 rounded relative h-50 w-60">
                  <img src={item.thumbnail_url} alt="recipe image" className="text-center rounded w-full h-full" />
                  <h3 className="bg-emerald-500 text-white font-bold text-center absolute bottom-0 w-full">{item.name}</h3>
                </NavLink>
                <button className="mt-2 bg-emerald-500 text-white font-bold p-1 rounded-lg hover:bg-emerald-700" onClick={() => removeFavorites(item.id)}>Remove from my favorites</button>
              </div>
            )
          : 
          <div className="text-center w-full">
            <p>No favorites yet! </p>
            <p className="mb-10">Let's go back to the Recipes List to add some!</p>
            <NavLink to="/recipes" className="my-btn">Back to Recipes list</NavLink>
          </div>
        }
      </section>
    </main>
  )
}