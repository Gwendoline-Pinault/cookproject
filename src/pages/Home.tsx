import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

export type User = {
  username: string;
  password: string;
}

export const Home = () => {
  const [errorPop, setErrorPop] = useState(false);
  const {isAuthenticate, signIn} = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticate) {
      navigate('/recipes');
    }
  }, [isAuthenticate, navigate]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const username = e.currentTarget.username.value;
    const password = e.currentTarget.password.value;

    if (username !== import.meta.env.USERNAME || password !== import.meta.env.PASSWORD) {
      setErrorPop(true);
      setTimeout(() => {setErrorPop(false)}, 3000);
    }

    signIn({username: username, password: password});
  }

  return (
      <main className="h-full flex flex-col items-center p-4">
        <h1 className="text-3xl text-center mt-2 princess-sofia-regular">Welcome on Cook website!</h1>

        <p className="w-[85%] mt-15 text-center">
          <span className="princess-sofia-regular mr-2">Cook</span>
          is a friendly recipes website where you can search, read and like recipes. Our cooks comments will be there if you want some special advices. You will love it!
        </p>
        <section className="flex flex-col items-center justify-center h-[50%]">
          <h2 className="font-bold text-md mb-10">Please, sign in to access recipes!</h2>
          <form className="flex flex-col w-lg items-center p-5" onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="username" className="font-bold">Username</label>
            <input type="text" name="username" className="focus:outline-emerald-500 active:bg-emerald-500 focus:outline-2 input" />
            <label htmlFor="password" className="mt-5 font-bold">Password</label>
            <input type="password" name="password" className="focus:outline-emerald-500 active:bg-emerald-500 focus:outline-2 input" />
            <button type="submit" className="my-btn mt-5">Sign in</button>
          </form>
        </section>
        <footer className="flex justify-center p-2">
          {errorPop && <div className="p-4 bg-red-500 text-white rounded-lg">Sorry, this user is not registered!</div>}
        </footer>
      </main>
  )
}
