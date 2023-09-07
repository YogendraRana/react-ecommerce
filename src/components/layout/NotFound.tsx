import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className='h-[100vh] flex flex-col justify-center items-center'>
            <div className='h-[6rem] w-[6rem] rounded-[50%] grid place-items-center bg-blue-100'>
                <i className="fa-solid fa-exclamation text-blue-500 text-[2rem]"></i>
            </div>
            <div className='flex flex-col items-center my-[3rem]'>
                <p className='text-[2.75rem]'>Page Not found</p>
                <p className='text-[1.5rem] text-gray-500'>The page you are looking for does not exist. Here are some helpful links:</p>
            </div>
            <div className='flex gap-[1rem]'>
                <button onClick={() => navigate(-1)} className='custom-shadow py-[1.25rem] w-[12.5rem] border cursor-pointer rounded-[0.5rem] hover:bg-gray-100 duration-150 text-[1.25rem]'>
                    <i className="fa-solid fa-arrow-left-long mr-[1rem]"></i>
                    Go Back
                </button>
                <button onClick={() => navigate('/')} className='custom-shadow py-[1.25rem] w-[12.5rem] bg-blue-500 cursor-pointer rounded-[0.5rem] text-white text-[1.25rem]'>
                    <i className="fa-solid fa-house mr-[1rem]"></i>
                    Go to Home
                </button>
            </div>
        </div>
    )
}

export default NotFound;