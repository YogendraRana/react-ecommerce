import { AnimatePresence, motion } from "framer-motion";

// interface
interface IDrawerProps {
    isDrawerOpen: boolean;
    setIsDrawerOpen: () => void;
    children: React.ReactNode;
}

const Drawer = ({ isDrawerOpen, setIsDrawerOpen, children }: IDrawerProps) => {
    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.currentTarget.id === 'overlay') {
            setIsDrawerOpen();
        }
    };


    return (
        <>
            <AnimatePresence>
                {
                    isDrawerOpen &&
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: isDrawerOpen ? "0" : "100%" }}
                        transition={{ stiffness: 1 }}
                        className={`
                            h-[100vh] w-[40rem]
                            fixed top-0 right-0 bottom-0
                            flex flex-col 
                            bg-white 
                            z-[50] 
                    `}>

                        {children}
                    </motion.div>
                }
            </AnimatePresence>


            {/* overlay */}
            <div
                id="overlay"
                onClick={handleOverlayClick}
                className={`
                    h-[100vh]
                    fixed top-0 left-0 right-0 bottom-0 
                    bg-black/50
                    duration-300
                    ${isDrawerOpen ? "opacity-100 visible z-[10]" : "opacity-0 invisible z-[-10]"}`}
            ></div>
        </>
    )
}

export default Drawer;