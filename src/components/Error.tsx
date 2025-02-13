import { Link } from "react-router-dom"

export const Error = () => {
  return (
    <main className="h-full w-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-emerald-600">Page not found </h1>
      <h3 className="italic my-10">Oups... Something went wrong. Go back home, please.</h3>

      <img src="/cook_error.png" alt="" className="rounded-xl mb-10" />

      <Link to="/" className="my-btn">Return to Home page</Link>
    </main>
  )
}