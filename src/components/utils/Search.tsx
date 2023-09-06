import React from "react";

// interface
interface SearchProps {
    isOpen: boolean;
    setOpen: () => void;
}

const Search = ({ isOpen, setOpen } : SearchProps) => {

    const handleClick = (e: React.MouseEvent) => {
        if (e.currentTarget.id === 'overlay') {
            setOpen();
        }
    };

    return (
        <>
            {
                isOpen && <div
                    onClick={handleClick}
                    id="overlay"
                    className=" fixed top-0 right-0 bottom-0 left-0 bg-black/20" ></div>
            }

            <div className={` absolute top-0 left-0 right-0 bg-white translate-y-[-100%] duration-300 ${isOpen ? "translate-y-0" : ""} `}>
                <div className="h-[17rem] px-[10rem] flex flex-col justify-center custom-shadow bg-white">
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
                            className="py-[1rem] outline-none text-[2.25rem] placeholder:text-[2.25rem]"
                        />
                        <button className="text-[1.5rem]" type="button">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search;