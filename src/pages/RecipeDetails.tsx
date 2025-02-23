import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";
import loading from '/loading.jpg';

export const RecipeDetails:React.FunctionComponent = () => {
  const params = useParams();

  if (!params.id) {
    throw new Error;
  }

  // get recipes list
  const {data, isLoading} = useFetch('list');

  // get the current recipe (because ther is no /recipes/id route on API)
  const recipe = data.find((item) => item.id === parseInt(params.id as string, 10));

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
    <>
      {recipe &&  
        <main className="h-full flex flex-col items-center overflow-y-auto pb-5 relative">
          <button className="my-btn absolute right-5 top-5">Add to my Favorites</button>

          <h1 className="text-2xl font-bold text-center my-4 text-emerald-600 mb-10">{recipe?.name}</h1>

          <img src={recipe.thumbnail_url} alt="Recipe image" className="max-w-100" />

          <p className="w-[50%] mt-5">{recipe.description}</p>

          <section className="flex flex-col w-[50%] my-5 border-1 border-emerald-500 rounded-lg p-5">
            <h2 className="font-bold text-lg text-emerald-600 mb-5">Ingredients</h2>

            <ul className="flex flex-col">
              {recipe.sections[0].components.map((item) => 
                <li className="list-item"> {item.raw_text}</li>
              )}
            </ul>
          </section>

          <section className="flex flex-col w-[80%] mt-5">
            <h2 className="font-bold text-xl text-emerald-600 mb-5">Steps</h2>
            {recipe.instructions.map((instruction) => 
              <p className="mb-5">{instruction.position}. {instruction.display_text}</p>
            )}
              
          </section>

        </main>
      }
    </>
  )
}