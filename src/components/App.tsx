import { useState } from "react";
import { Login } from "./Login"
import { Navbar } from "./Navbar"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className='w-full h-full flex flex-col'>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <h1></h1>

      <Login setIsLoggedIn={setIsLoggedIn} />
    </div>
  )
}

export default App
