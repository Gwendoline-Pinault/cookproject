import { useState } from "react";
import { Navbar } from "./Navbar"
import { useNavigate } from "react-router-dom";

export const RecipesList: React.FunctionComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate('/');
  }

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <h1 className="text-2xl font-bold text-center my-4 text-emerald-600">Cook's Recipes</h1>


    </div>
  )
}