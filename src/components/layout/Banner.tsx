const Banner = () => {
    return (
        <div className="h-[calc(95vh-var(--nav-height))] px-[10rem] flex overflow-hidden bg-[#f1f2f3] relative">
            <div className='basis-[50%] flex flex-col justify-center gap-[1rem] grow'>
                <h2 className="text-[4rem]">Product name</h2>
                <p className="text-[2rem]">Production description is the best <br /> description of the product for the product.</p>
            </div>
            <div className="basis-[50%] grid place-items-center grow">
                <img className="w-full h-full object-cover" src="https://ciseco-reactjs.vercel.app/static/media/detail1.f45e3a4d9bfeafd2f70b.jpg" alt="product-img"></img>
            </div>

            <div className="absolute bottom-[5rem] left-[10rem] flex gap-[1rem]">
                <button className="card-button">
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button className="card-button">
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </div>
    )
}

export default Banner;