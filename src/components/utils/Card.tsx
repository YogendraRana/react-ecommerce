import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

// import type
import { ItemType } from "../../types/type"

const Card = ({ item }: { item: ItemType }) => {
    const [isHovered, setIsHovered] = useState(false);

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

    const thirdButtonVariants = {
        hidden: { x: '100%', transition: { duration: 0.3, delay: 0.2 } },
        visible: { x: 0, transition: { duration: 0.3, delay: 0.2 } },
    };

    return (
        <div className='relative rounded-[0.5rem] overflow-hidden bg-[#ededed]' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <img src={item.image} alt={item.name} className='h-[27.5rem] w-[100%] group-hover:scale-[1.3] object-cover duration-300' />

            {/* info */}
            <motion.div 
                className='p-[1rem] flex justify-between absolute left-0 bottom-0 right-0 bg-white/60 border rounded-[0.5rem] m-[0.5rem]'
                initial= {{opacity: 0, y: '100%'}}
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : '100%', transition: { duration: 0.3 }}}
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
                        <motion.button variants={firstButtonVariants} className="card-button"><i className="fa-solid fa-cart-shopping"></i></motion.button>
                        <motion.button variants={secondButtonVariants} className="card-button"><i className="fa-solid fa-heart"></i></motion.button>
                        <motion.button variants={thirdButtonVariants} className="card-button"><i className="fa-solid fa-share"></i></motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Card;