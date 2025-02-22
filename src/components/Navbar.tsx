import { Link } from "react-router-dom";

type NavbarProps = {
  isAuthenticate: boolean;
  signOut: () => void;
}

export const Navbar = ({isAuthenticate, signOut}: NavbarProps) => {
  return (
    <header className="flex w-full items-center justify-between border-b-1 border-emerald-600 ">
      <div className="flex h-10 items-center">
        <h2 className="princess-sofia-regular ml-4">Cook</h2>
        <img src="/cook_hat.png" alt="cook hat icon" className="w-6 h-6 mx-2" />
      </div>
      <nav className="p-3">
        <Link to="/recipes" className="px-2 hover:text-emerald-500">Recipes List</Link>
        <Link to="/favorites" className="px-2 hover:text-emerald-500">Your favorites</Link>
      </nav>

      {isAuthenticate && 
        <div>
          <div className="flex items-center">
          <img src="/user-icon.svg" alt="user icon" className="w-5 h-5 mr-1" />
          <p className="text-sm pr-2 border-r-1 border-emerald-700">Captain</p>
          <button type="button" className="navlink" onClick={signOut}>Sign out</button>
        </div>
        </div>
      }
    </header>
  )
}