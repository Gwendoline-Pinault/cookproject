type LoginProps = {
  setIsLoggedIn: (bool: boolean) => void;
}

export const Login = ({setIsLoggedIn}: LoginProps) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const username = e.target[0].value;
    const password = e.target[1].value;
    
    if (username === "Captain" && password === "Il0v3H3@lthy") {
      setIsLoggedIn(true);
    }
  }

  return (
    <section className="flex flex-col items-center justify-center h-[70%]">
      <h2 className="font-bold text-md mb-10">Please, sign in to access recipes</h2>
      <form className="flex flex-col w-lg items-center p-5" onSubmit={e => handleSubmit(e)}>
        <label htmlFor="username" className="font-bold">Username</label>
        <input type="text" name="username" className="focus:outline-emerald-500 active:bg-emerald-500 focus:outline-2" />

        <label htmlFor="password" className="mt-5 font-bold">Password</label>
        <input type="password" name="password" className="focus:outline-emerald-500 active:bg-emerald-500 focus:outline-2" />

        <button type="submit" className="my-btn mt-5" >Sign in</button>
      </form>
    </section>
  )
}