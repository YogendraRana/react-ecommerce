import React from "react"
import Navbar from "../layout/Navbar"

// props type
type ProductsProp = {
    category: string
}

const Products: React.FC<ProductsProp> = ({ category }) => {
    return (
        <div>
            <Navbar />

            {category}
        </div>
    )
}

export default Products