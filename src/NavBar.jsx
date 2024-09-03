import { Link } from 'react-router-dom';

export default function NavBar(){
    return(
        <>
        <nav className="bg-[#212529] text-gray-500 p-2 rounded-lg">
        <div className="flex justify-evenly">
        <span className="cursor-pointer hover:text-white">
            <Link to="/">
            Home
            </Link>
        </span>
        <span className="cursor-pointer hover:text-white">
        <Link to="/addNote">
            Add Note
        </Link>
        </span>
        <span className="cursor-pointer hover:text-white">
        <a href="https://ayushxvx.github.io/Dark-portfolio" target="_blank">
            About me
        </a>
        </span>
        </div>
        </nav>
        </>
    )
}