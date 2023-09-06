import { useState } from "react";
import { Link, NavLink } from "react-router-dom"

// import components
import Search from "../utils/Search";

const Navbar = (): JSX.Element => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className="h-[7rem] px-[10rem] flex justify-between items-center border-b border-[#f0f0f0] relative">
            <Link to='/' className="mr-[5rem] text-[2.25rem] font-medium">
                Company.
            </Link>

            <nav className="h-full flex items-center text-[1.5rem]">
                <NavLink to="/men" className={({ isActive }) => isActive ? "nav-link border-black" : "nav-link border-white"}> Men </NavLink>
                <NavLink to="/women" className={({ isActive }) => isActive ? "nav-link border-black" : "nav-link border-white"}> Women </NavLink>
                <NavLink to="/kids" className={({ isActive }) => isActive ? "nav-link border-black" : "nav-link border-b borer-b borer-black"}> Kids </NavLink>
            </nav>

            <div className="flex items-center gap-[0.5rem]">
                <button onClick={() => setOpen(!isOpen)} className="h-[3.5rem] w-[3.5rem] bg-[#ededed] rounded-full text-[1.25rem] duration-200">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <button className="h-[3.5rem] w-[3.5rem] bg-[#ededed] rounded-full text-[1.25rem] duration-200">
                    <i className="fa-solid fa-bag-shopping"></i>
                </button>
            </div>

            {/* search component */}
            <Search isOpen={isOpen} setOpen={() => setOpen(!isOpen)} />
        </div>
    )
}

export default Navbar;