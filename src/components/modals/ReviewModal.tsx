// import components
import Modal from "../shared/Modal";

// interface
interface IReviewModal {
    isModalOpen: boolean,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReviewModal = ({ isModalOpen, setIsModalOpen }: IReviewModal) => {
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
                Review Modal
            </div>
        </Modal>
    )
}

export default ReviewModal;