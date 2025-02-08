export const Login = () => {
  return (
    <section className="flex justify-center">
      <form className="flex flex-col w-lg items-center">
        <label htmlFor="username" className="font-bold">Username</label>
        <input type="text" name="username" />

        <label htmlFor="password" className="mt-5 font-bold">Password</label>
        <input type="password" name="password" />

        <button type="submit" className="my-btn">Send</button>
      </form>
    </section>
  )
}