import { useState, useRef, RefObject } from 'react'

// import data
import data from '../../data/data'

// import components
import Card from '../utils/Card'

// menus
const menus = ['New Arrivals', 'Best Sellers', "Trending"];

const Recommendation = () => {
    const [recommendation, setRecommendation] = useState(menus[0]);

    const recommendRef: RefObject<HTMLElement> = useRef(null);

    // scroll to recommendations
    const handleMenuClick = (mnu: string) => {
        setRecommendation(mnu)
    };

    if (data && !data[0]) {
        return
    }

    return (
        <>
            <section ref={recommendRef}>
                <ul className='flex gap-[2.5rem] items-center justify-center'>
                    {
                        menus.map((menu, index) =>
                            <li key={index}>
                                <button
                                    onClick={() => handleMenuClick(menu)}
                                    className={`
                                        mb-[2rem] text-[3rem] font-bold duration-300
                                        sm:text-[2rem]
                                        ${menu === recommendation ? "text-black" : "text-[#b2beb5] "}
                                    `}
                                >
                                    {menu}
                                </button>
                            </li>
                        )
                    }
                </ul>


                <div className="grid grid-cols-4 gap-[1rem] md:grid-cols-3 sm:grid-cols-2">
                    {recommendation === menus[0] && data.slice(0, 8).map((item, index) => {
                        return (
                            <Card key={index} item={item} />
                        )
                    })}

                    {recommendation === menus[1] && data.slice(0, 8).map((item, index) => {
                        return (
                            <Card key={index} item={item} />
                        )
                    })}


                    {recommendation === menus[2] && data.slice(0, 8).map((item, index) => {
                        return (
                            <Card key={index} item={item} />
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Recommendation;