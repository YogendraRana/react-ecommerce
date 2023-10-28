// import components
import toast from "react-hot-toast";
import Modal from "../shared/Modal";

// interface
interface IShareModal {
    isModalOpen: boolean,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// social media
const social_media = [
    {
        name: 'Facebook',
        icon: 'fab fa-facebook-f'
    },
    {
        name: 'Instagram',
        icon: 'fab fa-instagram'
    },
    {
        name: 'Twitter',
        icon: 'fab fa-twitter'
    },
    {
        name: 'Discord',
        icon: 'fab fa-discord'
    }
]

// handle copy to clipboard
const handleCopyToClipboard = () => {
    toast('Copied to clipboard');
    window.navigator.clipboard.writeText(window.location.href);
}

const ShareModal = ({ isModalOpen, setIsModalOpen }: IShareModal) => {
    return (
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            <div className="w-[30rem] p-[1.75rem] rounded-lg bg-white " >
                <div className="mb-[2rem] flex justify-between items-center">
                    <h2 className="text-[2rem] font-bold"> Share </h2>
                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="h-[3rem] w-[3rem] bg-gray-100 hover:bg-gray-200 rounded-full text-[1.25rem] duration-200"
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>

                <div className="mb-[2rem] flex gap-[0.5rem] justify-between">
                    {
                        social_media.map((social, index) => (
                            <div key={index} className="w-[5rem] flex flex-col gap-[0.5rem] items-center">
                                <button className="h-[5rem] w-[5rem] text-[1.45rem] bg-gray-100 hover:bg-gray-200 rounded-full grid place-content-center duration-200">
                                    <i className={social.icon}></i>
                                </button>
                                <p className="text-[1.25rem] text-gray-500 text-center">{social.name}</p>
                            </div>
                        ))
                    }
                </div>

                <div className="flex flex-col gap-[0.5rem]">
                    <h2 className="text-[1.5rem] font-bold"> Copy </h2>
                    <div className="p-[0.5rem] flex justify-between border rounded-[0.5rem]">
                        <input value={window.location.href} className="text-[1.25rem] flex-1 outline-none text-gray-500" />
                        <button
                            onClick={handleCopyToClipboard}
                            className="h-[3rem] w-[3rem] bg-gray-100 hover:bg-gray-200 rounded-full text-[1.25rem] duration-200"
                        >
                            <i className="fa-solid fa-copy"></i>
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default ShareModal;