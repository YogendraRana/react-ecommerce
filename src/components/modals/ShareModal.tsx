// import components
import Modal from "../shared/Modal";

// interface
interface IShareModal {
    isModalOpen: boolean,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShareModal = ({ isModalOpen, setIsModalOpen }: IShareModal) => {
    return (
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            <div 
                className="
                    h-[10rem]
                    px-[4rem]
                    rounded-lg
                    flex justify-center items-center gap-[3rem] 
                    bg-white
                "
            >
                <button className="h-[5rem] w-[5rem] bg-[#1877F2] rounded-full text-[2rem] text-white">
                    <i className="fab fa-facebook-f"></i>
                </button>

                <button className="h-[5rem] w-[5rem] bg-[#E4405F] rounded-full text-[2rem] text-white">
                    <i className="fab fa-instagram"></i>
                </button>

                <button className="h-[5rem] w-[5rem] bg-[#1DA1F2] rounded-full text-[2rem] text-white">
                    <i className="fab fa-twitter"></i>
                </button>
            </div>
        </Modal>
    )
}

export default ShareModal;