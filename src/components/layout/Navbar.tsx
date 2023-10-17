import { useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"

// import components
import Cart from "../drawers/Cart";
import Search from "../drawers/Search";

const Navbar = (): JSX.Element => {
    const navigate = useNavigate();
    const categoryRef = useRef<HTMLDivElement>(null);

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const handleCategoryClick = () => {
        // scroll to top
        window.scrollTo(0, 0);
    }

    return (
        <header
            className={`
            h-[var(--nav-height)] 
            flex justify-between items-center 
            sticky top-0 
            bg-white/80
            z-[var(--z-nav)]
        `}>
            <Link to='/' className="mr-[5rem] text-[2.5rem] font-medium">
                Shop.
            </Link>

            <nav className="h-full flex items-center text-[1.5rem]" ref={categoryRef} onClick={handleCategoryClick}>
                <NavLink to="/men" className={({ isActive }) => isActive ? "nav-link border-black" : "nav-link border-white"}> Men </NavLink>
                <NavLink to="/women" className={({ isActive }) => isActive ? "nav-link border-black" : "nav-link border-white"}> Women </NavLink>
                <NavLink to="/kids" className={({ isActive }) => isActive ? "nav-link border-black" : "nav-link border-b borer-b borer-black"}> Kids </NavLink>
            </nav>

            <div className="flex items-center gap-[1rem]">
                <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="h-[3.5rem] w-[3.5rem] bg-[#ededed] rounded-full text-[1.25rem] duration-200">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <button onClick={() => setIsCartOpen(!isCartOpen)} className="h-[3.5rem] w-[3.5rem] bg-[#ededed] rounded-full text-[1.25rem] duration-200">
                    <i className="fa-solid fa-bag-shopping"></i>
                </button>
                <button onClick={() => navigate('/join')} className="h-[3.5rem] w-[3.5rem] bg-[#ededed] rounded-full text-[1.25rem] duration-200">
                    <i className="fa-solid fa-user"></i>
                </button>
            </div>

            {/* drawers */}
            <Search isSearchOpen={isSearchOpen} setIsSearchOpen={() => setIsSearchOpen(!isSearchOpen)} />
            <Cart isCartOpen={isCartOpen} setIsCartOpen={() => setIsCartOpen(!isCartOpen)} />
        </header>
    )
}

export default Navbar;