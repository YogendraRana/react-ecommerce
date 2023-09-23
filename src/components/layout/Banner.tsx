import { useState } from "react";

// import data
import data from "../../data/data";

const Banner = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const prev = () => {
        activeIndex === 0 ? setActiveIndex(data.length - 1) : setActiveIndex(activeIndex - 1);
    }

    const next = () => {
        activeIndex === data.length - 1 ? setActiveIndex(0) : setActiveIndex(activeIndex + 1);
    }

    return (
        <div className="h-[calc(95vh-var(--nav-height))] px-[10rem] relative flex bg-[#f1f2f3]">
            <div className='basis-[50%] flex flex-col justify-center gap-[2rem] grow'>
                <h2 className="text-[4rem]">{data[activeIndex].name}</h2>
                <p className="text-[1.5rem]">{data[activeIndex].description}</p>
                <div className="flex gap-[1rem]">
                    <button className="h-[4.5rem] w-[12rem] py-[1rem] text-[1.5rem] border border-[#b2beb5] hover:bg-[#b2beb5] duration-300">
                        Buy now
                    </button>
                    <button className="h-[4.5rem] w-[4.5rem] py-[1rem] text-[1.5rem] border border-[#b2beb5] hover:bg-[#b2beb5] duration-300">
                        <i className="fa-solid fa-shopping-cart"></i>
                    </button>
                </div>
            </div>

            <div className="basis-[50%] grid place-items-center grow">
                <img loading="lazy" className="h-full object-cover" src={data[activeIndex].image} alt="product-img"></img>
            </div>

            <div className="absolute bottom-[2rem] left-[50%] translate-x-[-50%] flex gap-[1rem] items-center">
                <button onClick={() => prev()} className="h-[3rem] w-[3rem] text-[#8a958d] hover:bg-white rounded-full duration-300">
                    <i className="fa-solid fa-chevron-left"></i>
                </button>

                <div className="flex gap-[1rem]">
                    {
                        data.map((_, index) =>
                            <span
                                key={index} 
                                onClick={() => setActiveIndex(index)}
                                className={`${activeIndex === index ? "bg-[#8a958d]" : "bg-white"} h-[0.75rem] w-[0.75rem] rounded-full`}></span>
                        )
                    }
                </div>

                <button onClick={() => next()} className="h-[3rem] w-[3rem] text-[#8a958d] hover:bg-white rounded-full duration-300">
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </div>
    )
}

export default Banner;