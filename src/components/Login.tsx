import { useState } from "react";
import { useNavigate } from "react-router-dom";

type LoginProps = {
  isLoggedIn: boolean;
  setIsLoggedIn: (bool: boolean) => void;
}

export type UserType = {
  username: string;
  password: string;
}

export const Login = ({setIsLoggedIn, isLoggedIn}: LoginProps) => {
  const [errorPop, setErrorPop] = useState(false);
  const [welcome, setWelcome] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const username = e.currentTarget.username.value;
    const password = e.currentTarget.password.value;
    
    if (username === "Captain" && password === "Il0v3H3@lthy") {
      setIsLoggedIn(true);
      setWelcome(true);
      setTimeout(() => {setWelcome(false); navigate('/recipes');}, 2000);
    } else {
      setErrorPop(true);
      setTimeout(() => {setErrorPop(false)}, 3000);
    }
  }

  return (
    <main className="h-full">
      <section className="flex flex-col items-center justify-center h-[70%]">
        <h2 className="font-bold text-md mb-10">Please, sign in to access recipes</h2>
        <form className="flex flex-col w-lg items-center p-5" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="username" className="font-bold">Username</label>
          <input type="text" name="username" className="focus:outline-emerald-500 active:bg-emerald-500 focus:outline-2" />
          <label htmlFor="password" className="mt-5 font-bold">Password</label>
          <input type="password" name="password" className="focus:outline-emerald-500 active:bg-emerald-500 focus:outline-2" />
          <button type="submit" className="my-btn mt-5">Sign in</button>
        </form>
      </section>
      <footer className="flex justify-center p-2">
        {isLoggedIn && welcome && <div className="p-4 rounded-lg bg-emerald-500 text-white animate-bounce">Welcome Captain !</div>}
        {errorPop && <div className="p-4 bg-red-500 text-white rounded-lg">Sorry, this user is not registered!</div>}
      </footer>
    </main>
  )
}