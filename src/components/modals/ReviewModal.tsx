import { useState } from "react";
import toast from "react-hot-toast";

// import components
import Modal from "../shared/Modal";

// interface
interface IReviewModal {
    isModalOpen: boolean,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReviewModal = ({ isModalOpen, setIsModalOpen }: IReviewModal) => {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');

    return (
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            <div className=" w-[30rem] p-[1.5rem] rounded-lg bg-white " >
                <div className="mb-[2rem] flex justify-between items-center">
                    <h2 className="text-[2rem] font-bold"> Overall Review </h2>
                    <button 
                        onClick={() => setIsModalOpen(false)}
                        className="h-[3rem] w-[3rem] bg-gray-100 hover:bg-gray-200 rounded-full text-[1.25rem] duration-200"
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>

                <div className="mb-[1.5rem] flex flex-col gap-[0.5rem]">
                    <h2 className="text-[1.25rem] font-bold"> Rate this product </h2>
                    <div className="flex gap-[0.5rem] group">
                        {
                            [1, 2, 3, 4, 5].map((_, index) => (
                                <button 
                                    key={index} 
                                    onClick={() => setRating(index + 1)}
                                    className="h-[3rem] w-[3rem] bg-gray-100 hover:bg-gray-200 rounded-[0.5rem] text-[1.25rem] duration-200"
                                >
                                    {
                                        index < rating ? (
                                            <i className="fa-solid fa-star text-yellow-400"></i>
                                        ) : (
                                            <i className="fa-regular fa-star"></i>
                                        )
                                    }
                                </button>
                            ))
                        }
                    </div>
                </div>

                <div className="mb-[1rem] flex flex-col gap-[0.5rem]">
                    <h2 className="text-[1.25rem] font-bold"> Product Review </h2>
                    <textarea 
                        value={review} 
                        onChange={(e) => setReview(e.target.value)} 
                        className="h-[10rem] w-full p-[0.5rem] text-[1.25rem] text-gray-500 outline-none border rounded-md"
                    ></textarea>
                </div>

                <button 
                    onClick={() => toast.success('Review submitted!')}
                    className="w-full px-[1.8rem] py-[1rem] text-[1.25rem] bg-gray-100 hover:bg-gray-200 rounded-md duration-200"
                > Submit </button>
            </div>
        </Modal>
    )
}

export default ReviewModal;