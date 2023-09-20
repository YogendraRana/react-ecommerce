import React from "react";
import data from "../../data/data";

// interface
interface CartProps {
    isCartOpen: boolean;
    setIsCartOpen: () => void;
}

const Cart = ({ isCartOpen, setIsCartOpen }: CartProps) => {

    const handleClick = (e: React.MouseEvent) => {
        if (e.currentTarget.id === 'overlay') {
            setIsCartOpen();
        }
    };

    return (
        <>
            <div
                className={`
                absolute
                h-[100vh] 
                w-[40rem]
                top-0 
                right-0 
                flex 
                flex-col 
                bg-white 
                z-[50] 
                duration-300 
                ${isCartOpen ? "translate-x-0" : "translate-x-[110%]"}
            `}>
                <div className="p-[1rem] text-[2rem]">
                    <button onClick={() => setIsCartOpen()} className="text-[1.75rem]">
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <span className="ml-[1rem]">My Cart</span>
                </div>
                <ul className="h-[100%] p-[1rem] flex flex-col gap-[1rem] overflow-y-auto">
                    {
                        data.map((item, index) => (
                            <li key={index} className="flex gap-[1rem] items-center">
                                <img className="h-[7rem] w-[7rem]" src="https://ciseco-reactjs.vercel.app/static/media/detail1.f45e3a4d9bfeafd2f70b.jpg"></img>

                                <div className="h-full mr-auto">
                                    <p className="text-[1.25rem]">{item.name}</p>
                                    <p className="text-[1.25rem]">{item.price}</p>
                                </div>

                                <button className="pr-[1rem] text-[1.5rem]">
                                    <i className="fa-solid fa-trash-can"></i>
                                </button>
                            </li>
                        ))
                    }
                </ul>
                <div className="p-[1rem] border-t flex flex-col gap-[1rem]">
                    <div className="flex justify-between">
                        <p className="text-[1.5rem]">Shipping</p>
                        <strong className="text-[1.5rem]">Rs 100</strong>
                    </div>

                    <div className="flex justify-between">
                        <p className="text-[1.5rem]">Total</p>
                        <strong className="text-[1.5rem]">Rs 100</strong>
                    </div>
                    <button className="w-full p-[1rem] rounded-full bg-[#2D3448] text-[1.25rem] text-white">Checkout</button>
                </div>
            </div>

            {/* overlay */}
            <div
                id="overlay"
                onClick={handleClick}
                className={`
                    absolute top-0 left-0 right-0 bg-black/20 duration-300 h-[100vh]
                    ${isCartOpen ? "opacity-100 visible z-[10]" : "opacity-0 invisible z-[-10]"}`}
            >
            </div>
        </>
    )
}

export default Cart;