import { Link } from "react-router-dom";

export const RecipesList: React.FunctionComponent = () => {

  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const search = e.currentTarget.search.value
    console.log(search);
  }

  return (
    <main className="h-full flex flex-col items-center">
      <h1 className="text-2xl font-bold text-center my-4 text-emerald-600">Cook's Recipes</h1>

      <form className="flex w-[90%] my-4 border-2 border-emerald-500 rounded" onSubmit={(e) => handleSubmitSearch(e)}>
        <input className="w-full bg-emerald-50 focus:outline-2 focus:outline-inset-2 focus:outline-lime-400 px-2 py-1 rounded placeholder:text-grey-300" name="search" placeholder="Search a ingredient or recipe"/>
        <button className="bg-emerald-500 px-2 text-white font-bold hover:bg-emerald-600">Search</button>
      </form>

      <section className="flex w-[90%]">
        <Link to="/recipes/greak-mushrooms" className="m-2 rounded shadow-emerald-700/50 hover:shadow-md">
          <article className="w-50 h-40 border-1 border-emerald-500 rounded relative">
            <img src="" alt="recipe image" className="text-center bg-white h-35 rounded" />
            <h3 className="bg-emerald-500 text-white font-bold text-center absolute bottom-0 w-full">Recipe title</h3>
          </article>
        </Link>
      </section>
    </main>
  )
}