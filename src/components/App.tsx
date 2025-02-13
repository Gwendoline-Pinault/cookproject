import { useState } from "react";
import { Login } from "./Login"
import { Navbar } from "./Navbar"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className='w-full h-full flex flex-col'>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>
      
    </div>
  )
}

export default App
