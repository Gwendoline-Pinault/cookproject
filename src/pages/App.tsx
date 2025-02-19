import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { useAuthContext } from "../hooks/useAuthContext";

export const App:React.FunctionComponent = () => {
    const {isAuthenticate, signOut} = useAuthContext();
    return (
        <div className='w-full h-full flex flex-col'>
            <Navbar isAuthenticate={isAuthenticate} signOut={signOut} />
            <Outlet />
        </div>
    )
}