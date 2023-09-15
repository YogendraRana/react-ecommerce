import React from "react";

// interface
interface SearchProps {
    isOpen: boolean;
    setOpen: () => void;
}

const Search = ({ isOpen, setOpen }: SearchProps) => {

    const handleClick = (e: React.MouseEvent) => {
        if (e.currentTarget.id === 'overlay') {
            setOpen();
        }
    };

    return (
        <>
            <div 
                className={`
                custom-shadow absolute top-0 left-0 right-0 h-[20rem] px-[10rem] flex flex-col justify-center bg-white z-[50] duration-300 
                ${isOpen ? "translate-y-0" : "translate-y-[-100%]"}
            `}>
                <div className="flex justify-between">
                    <h2 className="text-[1.5rem] text-black/60">What are you looking for?</h2>
                    <button className="text-[2rem]" type="button" onClick={setOpen}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div className="flex justify-between border-b">
                    <input
                        type="text"
                        placeholder="I'm looking for..."
                        autoFocus
                        className="w-full pr-[5rem] py-[1rem] outline-none text-[2.25rem] placeholder:text-[2.25rem]"
                    />
                    <button className="text-[1.5rem]" type="button">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </div>

            {/* overlay */}
            <div 
                id="overlay" 
                onClick={handleClick}
                className={`
                    absolute top-0 left-0 right-0 bg-black/20 duration-300 h-[100vh] z-[10]
                    ${isOpen ? "translate-y-0" : "translate-y-[-100%]"}`}>
            </div>
        </>
    )
}

export default Search;