import { useState } from "react";
import { toast } from "react-hot-toast";
import { motion, AnimatePresence } from 'framer-motion';

// import type
import { ItemType } from "../../types/type";
import { useCartStore } from "../../store/cartStore";
import { useNavigate } from "react-router-dom";

const Card = ({ item }: { item: ItemType }) => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    // zustand store
    const cart_items = useCartStore(state => state.cart_items);
    const addToCart = useCartStore(state => state.addToCart);
    const removeFromCart = useCartStore(state => state.removeFromCart);

    // cart item object
    const cartItem = {
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        quantity: 1
    }

    const containerVariants = {
        hidden: { opacity: 0, x: '100%' },
        visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    };

    const firstButtonVariants = {
        hidden: { x: '100%', transition: { duration: 0.3 } },
        visible: { x: 0, transition: { duration: 0.3 } },
    };

    const secondButtonVariants = {
        hidden: { x: '100%', transition: { duration: 0.3, delay: 0.1 } },
        visible: { x: 0, transition: { duration: 0.3, delay: 0.1 } },
    };

    return (
        <div
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
            className='relative rounded-[0.5rem] overflow-hidden bg-[#f1f2f3] cursor-pointer group' 
        >
            <img src={item.image} alt={item.name} className='h-[27.5rem] w-full group-hover:scale-[1.3] object-contain duration-[1.25s]' />

            {/* info */}
            <motion.div
                className='p-[1rem] flex justify-between absolute left-0 bottom-0 right-0 bg-white/60 border rounded-[0.5rem] m-[0.5rem]'
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : '100%', transition: { duration: 0.3 } }}
            >
                <h3 className='text-[1.5rem]'>{item.name}</h3>
                <p className='text-[1.5rem]'>Rs {item.price}</p>
            </motion.div>

            {/* icons */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        className="flex flex-col absolute top-[1rem] right-[1rem]"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <motion.button variants={firstButtonVariants} className="card-button"
                            onClick={() => {
                                if (cart_items.find(i => i.id === item.id)) {
                                    removeFromCart(item.id)
                                    toast.error("Removed from cart.");
                                } else {
                                    addToCart(cartItem)
                                    toast.success("Added to cart.");
                                }
                            }}
                        >
                            {cart_items.some((cartItem) => cartItem.id === item.id) ? (
                                <i className="fa-solid fa-check"></i>
                            ) : (
                                <i className="fa-solid fa-cart-shopping"></i>
                            )}
                        </motion.button>
                        <motion.button
                            variants={secondButtonVariants}
                            className="card-button"
                            onClick={() => navigate(`/product/${item.id}`)}
                        >
                            <i className="fa-solid fa-eye"></i>
                        </motion.button>

                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Card;