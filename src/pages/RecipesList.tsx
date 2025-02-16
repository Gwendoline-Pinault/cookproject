import { Navbar } from "../components/Navbar"
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

export const RecipesList: React.FunctionComponent = () => {
  const {isAuthenticate, signOut} = useAuthContext();
  const navigate = useNavigate();

  return (
    <main className="h-full flex flex-col items-center">
      <Navbar isAuthenticate={isAuthenticate} signOut={signOut} />
      <h1 className="text-2xl font-bold text-center my-4 text-emerald-600">Cook's Recipes</h1>

      <div className="border-2 border-emerald-500 rounded bg-emerald-50 flex relative w-[90%] my-4">
        <p className="px-2">Searchbar</p>
        <button className="bg-emerald-500 text-white font-bold px-2 absolute right-0">OK</button>
        </div>

      <section className="flex w-[90%]">
        <Link to="" className="m-2 rounded shadow-emerald-800/50 hover:shadow-md">
          <article className="w-50 h-40 border-1 border-emerald-500 rounded relative">
            <img src="" alt="recipe image" className="text-center bg-white h-35 rounded" />
            <h3 className="bg-emerald-500 text-white font-bold text-center absolute bottom-0 w-full">Recipe title</h3>
          </article>
        </Link>
      </section>
    </main>
  )
}