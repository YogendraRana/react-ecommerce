import React from "react"

// import components
import Card from "../utils/Card"
import Navbar from "../layout/Navbar"
import Footer from "../layout/Footer"

// import data
import data from "../../data/data"
import Filter from "./Filter"
import Space from "../utils/Space"

// props type
type ProductsProp = {
    category: string
}

const Products: React.FC<ProductsProp> = ({ category }) => {
    return (
        <>
            <Navbar />

            <div className="min-h-[50vh] px-[10rem]">
                <h2 className="mt-[5rem] text-[3rem]">Collection for {category}</h2>
                <p className="my-[3rem] text-[1.5rem] text-[#7b847d]">
                    We not only help you design exceptional products, <br />
                    but also make it easy for you to share your designs with more like-minded people.
                </p>

                <Space />

                <div className="mt-[4rem] flex gap-[1rem]">
                    <div className="w-[25%]">
                        <Filter />
                    </div>

                    <div className="grid grid-cols-3 gap-[1rem] grow-[1]">
                        {
                            data.map((item, index) => (
                                <Card key={index} item={item} />
                            ))
                        }
                    </div>
                </div>
            </div>

            <Space />
            <Footer />
        </>
    )
}

export default Products