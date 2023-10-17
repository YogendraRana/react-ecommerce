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
    const increaseQuantity = useCartStore(state => state.increaseQuantity);
    const decreaseQuantity = useCartStore(state => state.decreaseQuantity);

    // functions
    const increaseItemQuantity = (id: number) => {
        increaseQuantity(id);
    };

    const decreaseItemQuantity = (id: number) => {
        decreaseQuantity(id);
    };

    // cart info
    const cart_total = cart_items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping_total = cart_total > 1000 ? 0 : 50;

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
                            <ul className="h-[100%] p-[1rem] flex flex-col gap-[0.5rem] overflow-y-auto">
                                {
                                    cart_items.map((item, index) => (
                                        <li key={index} className="h-[8rem] border border-[#f5f2f2] flex gap-[1rem] items-center justify-between">
                                            <img className="h-[8rem] w-[8rem] bg-[#f1f2f3] " src={item.image}></img>

                                            <div className="h-full flex flex-col justify-evenly mr-auto">
                                                <p className="text-[1.35rem]">{item.name.length > 15 ? `${item.name.slice(0, 15)}...` : item.name}</p>
                                                <p className="text-[1.35rem]">Rs. {item.price}</p>
                                                <div className="w-[7.5rem] flex justify-between items-center border rounded-full overflow-hidden">
                                                    <button onClick={() => increaseItemQuantity(item.id)} className="h-[2rem] w-[2rem] text-[1.25rem]">+</button>
                                                    <p className="h-[2rem] w-[3rem] text-[1.25rem] grid place-content-center bg-slate-200">{item.quantity}</p>
                                                    <button onClick={() => decreaseItemQuantity(item.id)} className="h-[2rem] w-[2rem] text-[1.25rem]">-</button>
                                                </div>
                                            </div>

                                            <button className="h-full px-[1rem] text-[1.5rem] bg-gray-300 hover:bg-gray-600 hover:text-white duration-200" onClick={() => removeFromCart(item.id)}>
                                                <i className="fa-solid fa-trash-can"></i>
                                            </button>
                                        </li>
                                    ))
                                }
                            </ul>

                            <div className="p-[1rem] border-t flex flex-col gap-[1rem]">
                                <div className="flex justify-between">
                                    <p className="text-[1.5rem]">Shipping</p>
                                    <strong className="text-[1.5rem]">Rs {shipping_total}</strong>
                                </div>

                                <div className="flex justify-between">
                                    <p className="text-[1.5rem]">Total</p>
                                    <strong className="text-[1.5rem]">Rs {cart_total}</strong>
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