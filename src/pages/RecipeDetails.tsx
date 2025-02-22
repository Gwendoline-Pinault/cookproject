import { useParams } from "react-router-dom"

export const RecipeDetails:React.FunctionComponent = () => {
  const params = useParams();
  const recipeID = params.id;

    return (
        <main className="h-full">
            <h1 className="text-2xl font-bold text-center my-4 text-emerald-600">Recipe Details {recipeID}</h1>

            <section className="flex flex-col w-[90%]">

            </section>
        </main>
    )
}