import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";

// import components
import Drawer from "../shared/Drawer";

// interface
interface CartProps {
    isCartOpen: boolean;
    setIsCartOpen: () => void;
}

const Cart = ({ isCartOpen, setIsCartOpen }: CartProps) => {
    const navigate = useNavigate();

    // zustand state
    const cart_items = useCartStore(state => state.cart_items);
    const removeFromCart = useCartStore(state => state.removeFromCart);

    return (
        <>
            <Drawer isDrawerOpen={isCartOpen} setIsDrawerOpen={setIsCartOpen}>

                <div className="p-[1rem] text-[2rem]">
                    <button onClick={() => setIsCartOpen()} className="text-[1.75rem]">
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <span className="ml-[1rem]">My Cart</span>
                </div>

                {
                    cart_items.length ? (
                        <>
                            <ul className="h-[100%] p-[1rem] flex flex-col gap-[1rem] overflow-y-auto">
                                {
                                    cart_items.map((item, index) => (
                                        <li key={index} className="flex gap-[1rem] items-center">
                                            <img className="h-[7rem] w-[7rem] bg-[#f1f2f3] " src={item.image}></img>

                                            <div className="h-full mr-auto">
                                                <p className="text-[1.5rem]">{item.name}</p>
                                                <p className="text-[1.45rem]">Rs. {item.price}</p>
                                            </div>

                                            <button className="pr-[1rem] text-[1.5rem]" onClick={() => removeFromCart(item.id)}>
                                                <i className="fa-solid fa-trash-can"></i>
                                            </button>
                                        </li>
                                    ))
                                }
                            </ul>

                            <div className="p-[1rem] border-t flex flex-col gap-[1rem]">
                                <div className="flex justify-between">
                                    <p className="text-[1.5rem]">Shipping</p>
                                    <strong className="text-[1.5rem]">Rs 100</strong>
                                </div>

                                <div className="flex justify-between">
                                    <p className="text-[1.5rem]">Total</p>
                                    <strong className="text-[1.5rem]">Rs 100</strong>
                                </div>
                                <button
                                    onClick={() => navigate('/checkout')}
                                    className="w-full p-[1rem] rounded-full bg-[#2D3448] text-[1.25rem] text-white">Checkout</button>
                            </div>
                        </>
                    ) : (
                        <div className="p-[1rem] text-[1.45rem] text-[#8f9390]">Your cart is currently empty.</div>
                    )
                }
            </Drawer>
        </>
    )
}

export default Cart;