import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// import hooks/store
import { useStore } from "../../hooks/useStore";

// import components
import Card from "../utils/Card";

// import data
import data from "../../data/data";

// import type
import { ItemType, StoreMenuType } from "../../types/type";

const Store = () => {
    const store_menu = useStore();
    const [activeMenu, setActiveMenu] = useState<number>(0);

    const [products, setProducts] = useState<ItemType[]>([]);

    useEffect(() => {
        if (data) {
            setProducts(data);
        }
    }, []);

    useEffect(() => {
        const filtered = activeMenu === 0 ? data : data.filter((item: ItemType) => item.categoryId === activeMenu);
        setProducts(filtered);
    }, [activeMenu]);

    return (
        <div>
            <h2 className="text-center text-[3.5rem] font-black sm:text-[3rem]">Start Exploring</h2>

            <div className="my-[1rem] py-[1.5rem] text-[1.5rem] flex gap-[1rem] justify-center">
                {
                    store_menu.map((menu: StoreMenuType, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveMenu(menu.id)}
                            className={`
                                w-[12rem] py-[0.75rem] 
                                flex justify-center gap-[1.25rem] items-center 
                                rounded-full 
                                z-10
                                relative
                                duration-200 
                                focus-visible:outline
                                ${menu.id === activeMenu ? 'text-white' : 'text-[#707070] hover:text-black'}
                            `}
                        >
                            <i className={menu.icon}></i>
                            <span>{menu.label}</span>
                            {
                                menu.id === activeMenu &&
                                <motion.div
                                    layoutId="active-pill"
                                    style={{ borderRadius: '100px' }}
                                    className="absolute inset-0 bg-[#24252a] rounded-full mix-blend-exclusion">
                                </motion.div>
                            }
                        </button>
                    ))
                }
            </div>

            <div className="grid grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2">
                <AnimatePresence>
                    {
                        products.map((item: ItemType, index) => (
                            <motion.div
                                key={index}
                                layout
                                initial={{ transform: "scale(0)", opacity: 0 }}
                                animate={{ transform: "scale(1)", opacity: 1 }}
                                exit={{ transform: "scale(0)", opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Card key={index} item={item} />
                            </motion.div>
                        ))
                    }
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Store;