import { NavLink } from "react-router-dom";

export type FavoriteObject = {
  id: number;
  thumbnail_url: string;
  name: string;
}

export const Favorites:React.FunctionComponent = () => {
  const favorites = [{id: 1, thumbnail_url: 'cook_hat.png', name: 'cook'}];

  return (
    <main className="h-full flex flex-col items-center pb-5">
      <h1 className="text-2xl font-bold text-center my-4 text-emerald-600 mb-10">My Favorites</h1>

      <section className="flex w-[90%]">
        {favorites.map((item) => 
          <NavLink to={"/recipes/" + item.id} className="p-5">
            <div className="relative  border-1 border-emerald-500 rounded">
              <img src={item.thumbnail_url} alt="recipe image" className="text-center rounded h-50" />
              <h3 className="bg-emerald-500 text-white font-bold text-center absolute bottom-0 w-full">{item.name}</h3>
            </div>
            <button className="my-btn mt-2">Remove from my favorites</button>
          </NavLink>
        )}
      </section>
    </main>
  )
}