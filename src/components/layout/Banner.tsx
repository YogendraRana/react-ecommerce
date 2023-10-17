import { useState } from "react";
import { motion } from "framer-motion";

// import data
import data from "../../data/data";
import { useCartStore } from "../../store/cartStore";

const Banner = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const banner_data = data.slice(0, 3);

    const cart_items = useCartStore(state => state.cart_items);
    const addToCart = useCartStore(state => state.addToCart);
    const removeFromCart = useCartStore(state => state.removeFromCart);

    const cartItem = {
        id: data[activeIndex].id,
        name: data[activeIndex].name,
        price: data[activeIndex].price,
        image: data[activeIndex].image,
        quantity: 1
    }

    const prev = () => {
        activeIndex === 0 ? setActiveIndex(banner_data.length - 1) : setActiveIndex(activeIndex - 1);
    }

    const next = () => {
        activeIndex === banner_data.length - 1 ? setActiveIndex(0) : setActiveIndex(activeIndex + 1);
    }

    return (
        <div className="h-[calc(95vh-var(--nav-height))] px-[10rem] relative flex bg-[#f1f2f3]">
            <motion.div
                className='basis-[50%] flex flex-col justify-center gap-[1rem]'
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.h2
                    className="text-[4rem]"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.5 }}
                >
                    {data[activeIndex].name}
                </motion.h2>
                <motion.p
                    className="text-[1.5rem]"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.5 }}
                >
                    {data[activeIndex].description}
                </motion.p>
                <div className="mt-[2rem] flex gap-[1rem]">
                    <button className="h-[4.5rem] w-[12rem] py-[1rem] text-[1.5rem] border border-[#b2beb5] hover:bg-[#b2beb5] duration-300">
                        Buy now
                    </button>
                    <button 
                        onClick={() => {
                            if (cart_items.find(i => i.id === data[activeIndex].id)) {
                                removeFromCart(data[activeIndex].id)
                            } else {
                                addToCart(cartItem)
                            }
                        }}
                        className="h-[4.5rem] w-[4.5rem] py-[1rem] text-[1.5rem] border border-[#b2beb5] duration-300"
                    >
                        {cart_items.some((cartItem) => cartItem.id === data[activeIndex].id) ? (
                            <i className="fa-solid fa-check"></i>
                        ) : (
                            <i className="fa-solid fa-cart-shopping"></i>
                        )}
                    </button>
                </div>
            </motion.div>

            <div className="basis-[50%] grid place-items-center grow">
                <motion.img
                    loading="lazy"
                    className="h-full object-cover"
                    src={data[activeIndex].image}
                    alt="product-img"
                    key={activeIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                ></motion.img>
            </div>

            <div className="absolute bottom-[2rem] left-[50%] translate-x-[-50%] flex gap-[1rem] items-center">
                <button onClick={() => prev()} className="h-[3rem] w-[3rem] text-[#8a958d] hover:bg-white rounded-full duration-300">
                    <i className="fa-solid fa-chevron-left"></i>
                </button>

                <div className="flex gap-[1rem]">
                    {
                        banner_data.map((_, index) =>
                            <span
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`${activeIndex === index ? "bg-[#b2beb5]" : "bg-white"} h-[0.75rem] w-[0.75rem] rounded-full`}></span>
                        )
                    }
                </div>

                <button onClick={() => next()} className="h-[3rem] w-[3rem] text-[#8a958d] hover:bg-white rounded-full duration-300" >
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </div>
    )
}

export default Banner;