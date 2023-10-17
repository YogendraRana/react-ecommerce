import { AnimatePresence, motion } from "framer-motion";

// interface
interface IModalProps {
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
}

const Modal = ({ isModalOpen, setIsModalOpen, children }: IModalProps) => {
    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.currentTarget.id === 'overlay') {
            setIsModalOpen(false);
        }
    };

    return (
        <>
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="
                            grid place-items-center
                            fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                            z-[200]
                        "
                    >
                        {children}
                    </motion.div>
                )}
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
                    ${isModalOpen ? "opacity-100 visible z-[150]" : "opacity-0 invisible z-[-10]"}`}
            ></div>
        </>
    )
}

export default Modal;