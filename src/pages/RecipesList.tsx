import { NavLink } from "react-router-dom";
import loading from '/loading.jpg';
// import { useFetch } from "../hooks/useFetch";
import {data} from "../components/data";
import { useFavoriteContext } from "../hooks/useFavoriteContext";
import { FavoriteObject } from "./Favorites";

export const RecipesList: React.FunctionComponent = () => {
  // const {isLoading, data} = useFetch('list');
  const isLoading = false;
  const {favorites, setFavorites, removeFavorites} = useFavoriteContext();

  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const search = e.currentTarget.search.value;
  }

  /**
   * Get the recipe's data to add it to favorites
   * @param e form submit event
   */
  const handleStarClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const recipeId = e.currentTarget.recipeId.value;
    const thumbnail_url = e.currentTarget.thumbnail_url.value;
    const name = e.currentTarget.recipeName.value;

    if (favorites.find((recipe) => recipe.id === parseInt(recipeId, 10))) {
      removeFavorites(parseInt(recipeId, 10));
    } else {
      let newFavoritesList: Array<FavoriteObject> = [];

      // check if favorites exists
      if (favorites.length > 0) {
        // copy current favorites list
        newFavoritesList = favorites;
      }
    
      // add the new recipe in the list
      newFavoritesList.push({id: parseInt(recipeId, 10), thumbnail_url: thumbnail_url, name: name});
    
      // set the list with the new array
      setFavorites(newFavoritesList);
    }
  }

  // display a loader when the page is not ready
  if (isLoading) {
    return (
    <section className="mt-10 w-full">
        <h3 className="text-center ">Getting recipe informations..</h3>
      <div className='mt-20 mb-10 flex justify-center'>
        <img className='logo logo-spin' src={loading} alt="loading" />
      </div>
    </section>
  )}

  return (
    <main className="h-full flex flex-col items-center">
      <h1 className="text-2xl font-bold text-center my-4 text-emerald-600">Cook's Recipes</h1>

      <form className="flex w-[90%] my-4 border-2 border-emerald-500 rounded" onSubmit={(e) => handleSubmitSearch(e)}>
        <input className="w-full bg-emerald-50 focus:outline-2 focus:outline-inset-2 focus:outline-lime-400 px-2 py-1 rounded placeholder:text-grey-300" name="search" placeholder="Search a ingredient or recipe"/>
        <button className="bg-emerald-500 px-2 text-white font-bold hover:bg-emerald-600">Search</button>
      </form>

      <section className="mt-10 w-[90%] flex flex-wrap justify-between">
        {data && data.map((recipe) => 
            <article className="hover:shadow-emerald-700/50 h-70 w-70 m-2 rounded border-1 border-emerald-500 relative overflow-hidden" key={recipe.slug}>
              <form className="flex" onSubmit={(e) => handleStarClick(e)}>
                <input type="hidden" id={recipe.slug} name="recipeName" value={recipe.name} />
                <input type="hidden" id={recipe.thumbnail_url} name="thumbnail_url" value={recipe.thumbnail_url} />
                <input type="hidden" id={String(recipe.id)} name="recipeId" value={recipe.id} />

                <h3 className="bg-emerald-500 text-white font-bold pl-2 w-full">{recipe.name}</h3>
                {/* check if the recipe is in the favorites to render the star (plain if true, empty if false) */}
                <button type="submit" className="w-8 bg-emerald-500 p-1">{favorites.find((item) => item.id === recipe.id) ? <img src='/star-solid.svg' alt="" /> : <img src='/star-regular.svg' alt="" />} </button>
              </form>
              <NavLink to={"/recipes/" + recipe.id}>
                <img src={recipe.thumbnail_url} alt="recipe image" className="text-center h-full" />
              </NavLink>
            </article>
        )}
      </section>
    </main>
  )
}