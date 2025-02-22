import { Link } from "react-router-dom";
import { RapidApiCollectionResponse, useFetch } from "../hooks/useFetch";
import loading from '/loading.jpg';
import { useEffect, useState } from "react";

export const RecipesList: React.FunctionComponent = () => {
  const [url, setUrl] = useState('https://tasty.p.rapidapi.com/recipes/list');

  const {data, isLoading} = useFetch(url);

  console.log(data);
  
  // const data: RapidApiCollectionResponse = [{id: 1, cook_time_minutes: 30, description:'This is a super recipe', name:'Test recipe', slug:'test-recipe', thumbnail_url:'/cook_hat.png', total_time_minutes: 40, user_ratings: {score: 3}}, {id: 1, cook_time_minutes: 30, description:'This is a super recipe', name:'Test recipe', slug:'test-recipe', thumbnail_url:'/cook_hat.png', total_time_minutes: 40, user_ratings: {score: 3}}, {id: 1, cook_time_minutes: 30, description:'This is a super recipe', name:'Test recipe', slug:'test-recipe', thumbnail_url:'/cook_hat.png', total_time_minutes: 40, user_ratings: {score: 3}}, {id: 1, cook_time_minutes: 30, description:'This is a super recipe', name:'Test recipe', slug:'test-recipe', thumbnail_url:'/cook_hat.png', total_time_minutes: 40, user_ratings: {score: 3}}, {id: 1, cook_time_minutes: 30, description:'This is a super recipe', name:'Test recipe', slug:'test-recipe', thumbnail_url:'/cook_hat.png', total_time_minutes: 40, user_ratings: {score: 3}}, {id: 1, cook_time_minutes: 30, description:'This is a super recipe', name:'Test recipe', slug:'test-recipe', thumbnail_url:'/cook_hat.png', total_time_minutes: 40, user_ratings: {score: 3}}];
  
  // const isLoading = true;

  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const search = e.currentTarget.search.value;
  }

  return (
    <main className="h-full flex flex-col items-center">
      <h1 className="text-2xl font-bold text-center my-4 text-emerald-600">Cook's Recipes</h1>

      <form className="flex w-[90%] my-4 border-2 border-emerald-500 rounded" onSubmit={(e) => handleSubmitSearch(e)}>
        <input className="w-full bg-emerald-50 focus:outline-2 focus:outline-inset-2 focus:outline-lime-400 px-2 py-1 rounded placeholder:text-grey-300" name="search" placeholder="Search a ingredient or recipe"/>
        <button className="bg-emerald-500 px-2 text-white font-bold hover:bg-emerald-600">Search</button>
      </form>

      {isLoading ? 
          <section className="mt-10 w-full">
            <h3 className="text-center ">Wonderfull recipes are loading...</h3>
            <div className='mt-20 mb-10 flex justify-center'>
              <img className='logo logo-spin' src={loading} alt="loading" />
            </div>
          </section>

        :
        <section className="mt-10 w-[90%] grid grid-cols-5 gap-10">
          {data && data.map((recipe) => 
            <Link to={"/recipes/" + recipe.id} className="rounded shadow-emerald-700/50 hover:shadow-md border-1 border-emerald-500 relative max-h-70">
                <img src={recipe.thumbnail_url} alt="recipe image" className="text-center rounded w-full h-full max-w-full max-h-full" />
                <h3 className="bg-emerald-500 text-white font-bold text-center absolute bottom-0 w-full">{recipe.name}</h3>
            </Link>
          )}
        </section>
      }
    </main>
  )
}