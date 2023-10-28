import React from "react"
import { toast } from "react-hot-toast"
import { useNavigate, useParams } from "react-router-dom"

// import components
import Space from "../utils/Space"
import Footer from "../layout/Footer"
import Navbar from "../layout/Navbar"
import ShareModal from "../modals/ShareModal"
import ReviewModal from "../modals/ReviewModal"

// import data
import data from "../../data/data"

// import store
import { useCartStore } from "../../store/cartStore"

const ProductsDetail: React.FC = () => {
    const navigate = useNavigate();
    const [isShareModalOpen, setIsShareModalOpen] = React.useState(false);
    const [isReviewModalOpen, setIsReviewModalOpen] = React.useState(false);

    // product
    const { id } = useParams<{ id: string }>()
    const product = data.find(item => item.id === parseInt(id as string));

    // cart
    const addToCart = useCartStore(state => state.addToCart);
    const cart_items = useCartStore(state => state.cart_items);
    const removeFromCart = useCartStore(state => state.removeFromCart);

    const cartItem = {
        id: product?.id ?? 0,
        name: product?.name ?? "",
        price: product?.price ?? 0,
        image: product?.image ?? "",
        quantity: 1
    }

    if (!product) return (
        <div className="h-[100vh] text-[4rem] grid place-content-center relative">
            <p>404: Product not found!</p>
            <button
                onClick={() => navigate(-1)}
                className='
                        w-[12.5rem] 
                        py-[1.25rem] 
                        absolute
                        top-[5rem]
                        left-[5rem]
                        flex
                        justify-center
                        items-center
                        gap-[1rem]
                        text-[1.25rem]
                        border 
                        rounded-[0.5rem] 
                        hover:bg-gray-100 
                        duration-200 
                    '
            >
                <i className="fa-solid fa-arrow-left-long"></i>
                <p>Go Back</p>
            </button>
        </div>
    )

    return (
        <>
            <Navbar />

            <div className="min-h-[50vh]">
                <h2 className="mt-[2.5rem] text-[3rem]">Product detail of {product?.name}</h2>
                <div className="my-[1rem] text-[1.5rem] text-[#7b847d]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                    Neque incidunt aliquid, cupiditate repudiandae voluptas, dolorem blanditiis eos fugiat placeat tempore.
                </div>

                <hr className="mt-[2rem] mb-[3rem]" />

                <div className="mt-[2rem] flex gap-[1rem]">
                    <div className="w-1/2">
                        <img src={product?.image} alt="product-pic" className="h-[40rem] w-full object-cover" />
                    </div>
                    <div className="w-1/2 p-[2rem]">
                        <h2 className="text-[3.5rem]">{product?.name}</h2>

                        <div className="flex gap-[1rem] text-[1.5rem] text-[#7b847d]">
                            <div className="pr-[1rem] border-r text-[1.25rem]">
                                <span className="text-[1.5rem]">Rating: </span>
                                {
                                    [1, 2, 3, 4, 5].map((val, index) => {
                                        return (
                                            <i key={index} className={(product?.rating + 1 === val + 0.5) ? "fas fa-star-half-alt" : (product?.rating >= val) ? "fas fa-star" : "far fa-star"} aria-hidden='true' />
                                        )
                                    })
                                }
                            </div>
                            <div className="pr-[1rem] border-r">Warranty: 1 year</div>
                            <div className="pr-[1rem] border-r">Delivery: 2 days</div>
                            <div className="pr-[1rem]">Reviews: 25</div>
                        </div>

                        <div className="mt-[3rem]">
                            <p className="text-[1.5rem]">{product?.description}</p>
                            <p className="text-[2rem] mt-[1rem]">Rs {product?.price}</p>
                        </div>

                        <div className="mt-[3rem] flex gap-[1rem]">
                            <button
                                className="h-[4rem] w-[4rem] border rounded-[1rem] text-[1.25rem]"
                                onClick={() => {
                                    if (cart_items.find(i => i.id === product.id)) {
                                        removeFromCart(product.id);
                                        toast.error("Removed from cart.");
                                    } else {
                                        addToCart(cartItem);
                                        toast.success("Added to cart.");
                                    }
                                }}
                            >
                                {cart_items.some((cartItem) => cartItem.id === product.id) ? (
                                    <i className="fa-solid fa-check"></i>
                                ) : (
                                    <i className="fa-solid fa-cart-shopping"></i>
                                )}
                            </button>

                            <button 
                                className="h-[4rem] w-[4rem] border rounded-[1rem] text-[1.25rem]"
                                onClick={() => setIsReviewModalOpen(true)}
                            >
                                <i className="fas fa-star"></i>
                            </button>

                            <button 
                                className="h-[4rem] w-[4rem] border rounded-[1rem] text-[1.25rem]"
                                onClick={() => setIsShareModalOpen(true)}
                            >
                                <i className="fas fa-share"></i>
                            </button>

                            <button className="h-[4rem] w-[10rem] border rounded-[1rem] text-[1.25rem]">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Space />
            <Footer />

            {/* models */}
            <ShareModal isModalOpen={isShareModalOpen} setIsModalOpen={setIsShareModalOpen} />
            <ReviewModal isModalOpen={isReviewModalOpen} setIsModalOpen={setIsReviewModalOpen} />
        </>
    )
}

export default ProductsDetail