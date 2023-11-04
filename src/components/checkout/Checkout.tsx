import { Link } from 'react-router-dom';
import Divider from '../utils/Space';
import Footer from '../layout/Footer';

// import store
import { useCartStore } from '../../store/cartStore';
import toast from 'react-hot-toast';

const Checkout = () => {

    const cart_items = useCartStore(state => state.cart_items);
    const grand_total = cart_items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping_fee = grand_total > 1000 ? 0 : 100;

    return (
        <>
            <div className='px-[10rem] md:px-[4rem] sm:px-[1rem]'>
                <div className="h-[30vh] flex flex-col justify-center items-center relative">
                    <h2 className='text-[3rem]'>Checkout</h2>
                    <div className='mt-[1rem] text-[1.25rem]'>
                        <Link to='/'>Home</Link>
                        <span className='mx-[1rem]'>.</span>
                        <span>Checkout</span>
                        <span className='mx-[1rem]'>.</span>
                        <button onClick={() => window.history.back()}>Back</button>
                    </div>
                </div>

                <div className="p-[2rem] text-[1.25rem] bg-[#ededed]">
                    <i className="fa-regular fa-user"></i>
                    <span className='ml-[1rem]'>You need to have an account to make payment.</span>
                    <Link to='/join'>Click here to <u>register</u></Link>
                </div>

                <Divider />
                {/* shipping detail */}
                <div>
                    <h2 className='text-[2rem] mb-[2rem]'>Shipping Details</h2>

                    <form className='grid grid-cols-2 gap-[1rem] justify-between flex-wrap sm:grid-cols-1'>
                        <label>
                            <h2 className='text-[1.5rem] text-[#24252a]'>Your Name</h2>
                            <input type="text" placeholder="e.g. John Doe" autoComplete='off' className='w-[100%] p-[1rem] text-[1.25rem] border rounded-[0.5rem] placeholder:text-[1.25rem]' />
                        </label>

                        <label>
                            <h2 className='text-[1.5rem] text-[#24252a]'>Phone Number</h2>
                            <input type="tel" maxLength={10} placeholder="e.g. 9812345678" autoComplete='off' className='w-[100%] p-[1rem] text-[1.25rem] border rounded-[0.5rem] placeholder:text-[1.25rem]' />
                        </label>

                        <label>
                            <h2 className='text-[1.5rem] text-[#24252a]'>Your Email</h2>
                            <input type="text" placeholder="e.g. example@gmail.com" autoComplete='off' className='w-[100%] p-[1rem] text-[1.25rem] border rounded-[0.5rem] placeholder:text-[1.25rem]' />
                        </label>

                        <label>
                            <h2 className='text-[1.5rem] text-[#24252a]'>Select Province</h2>
                            <select autoComplete='off' className='w-[100%] p-[1rem] text-[1.25rem] border rounded-[0.5rem] placeholder:text-[1.25rem]'>
                                <option value='' disabled className='text-[1.25rem]'>Province</option>
                                <option value='Province 1' className='text-[1.25rem]'>Province 1</option>
                                <option value='Province 2' className='text-[1.25rem]'>Province 2</option>
                                <option value='Province 3' className='text-[1.25rem]'>Province 3</option>
                                <option value='Province 4' className='text-[1.25rem]'>Province 4</option>
                                <option value='Province 5' className='text-[1.25rem]'>Province 5</option>
                                <option value='Province 6' className='text-[1.25rem]'>Province 6</option>
                                <option value='Province 7' className='text-[1.25rem]'>Province 7</option>
                            </select>
                        </label>

                        <label>
                            <h2 className='text-[1.5rem] text-[#24252a]'>City</h2>
                            <input type="text" placeholder="e.g. Pokhara" name='city' autoComplete='off' className='w-[100%] p-[1rem] text-[1.25rem] border rounded-[0.5rem] placeholder:text-[1.25rem]' />
                        </label>

                        <label>
                            <h2 className='text-[1.5rem] text-[#24252a]'>Address</h2>
                            <input type="text" placeholder="e.g. 8th Street, Baidam 6, Pokhara" name='address' autoComplete='off' className='w-[100%] p-[1rem] text-[1.25rem] border rounded-[0.5rem] placeholder:text-[1.25rem]' />
                        </label>
                    </form>
                </div>

                <Divider />
                {/* payment detail */}
                <div>
                    <h2 className='text-[2rem] mb-[2rem]'>Payment Detail</h2>

                    <form className='grid grid-cols-2 gap-[1rem] sm:grid-cols-1'>
                        <label>
                            <h2 className='text-[1.5rem] text-[#24252a]'>Cardholder's Name</h2>
                            <input type="text" placeholder='Name' className='w-[100%] p-[1rem] text-[1.25rem] border rounded-[0.5rem] placeholder:text-[1.25rem]' />
                        </label>

                        <label>
                            <h2 className='text-[1.5rem] text-[#24252a]'>Card Number</h2>
                            <input type="text" placeholder="1234-1234-1234-1234" className='w-[100%] p-[1rem] text-[1.25rem] border rounded-[0.5rem] placeholder:text-[1.25rem]' ></input>
                        </label>

                        <label>
                            <h2 className='text-[1.5rem] text-[#24252a]'>Expiration</h2>
                            <input type="text" placeholder='yyyy-mm-dd' className='w-[100%] p-[1rem] text-[1.25rem] border rounded-[0.5rem] placeholder:text-[1.25rem]' ></input>
                        </label>

                        <label>
                            <h2 className='text-[1.5rem] text-[#24252a]'>Security Code</h2>
                            <input type="text" placeholder="123" className='w-[100%] p-[1rem] text-[1.25rem] border rounded-[0.5rem] placeholder:text-[1.25rem]' ></input>
                        </label>
                    </form>
                </div>

                {/* confirm summary */}
                <Divider />
                <div className='p-[5rem] outline-dashed outline-2 outline-[#b2beb5] '>
                    <h2 className='text-[2rem] pb-[1rem] mb-[2rem] font-semibold'>Order Summary</h2>

                    <div className='grid grid-cols-3 gap-[2rem] sm:grid-cols-1'>
                        <label>
                            <h2 className='text-[1.5rem] text-[#24252a]'>Order Total</h2>
                            <input value={`Rs ${grand_total}`} disabled className='w-[100%] p-[1rem] text-[1.25rem] border rounded-[0.5rem] placeholder:text-[1.25rem]' />
                        </label>

                        <label>
                            <h2 className='text-[1.5rem] text-[#24252a]'>Shipping Fee</h2>
                            <input value={`Rs ${shipping_fee}`} disabled className='w-[100%] p-[1rem] text-[1.25rem] border rounded-[0.5rem] placeholder:text-[1.25rem]' />
                        </label>

                        <label>
                            <h2 className='text-[1.5rem] text-[#24252a]'>Card Number</h2>
                            <input value="1234-1234-1234-1234" disabled className='w-[100%] p-[1rem] text-[1.25rem] border rounded-[0.5rem] placeholder:text-[1.25rem]' ></input>
                        </label>
                    </div>

                    <Divider />

                    <div className='pt-[2rem] flex gap-[1rem] justify-end border-t'>
                        <button
                            onClick={() => toast.error('Order cancelled')}
                            className='py-[1.25rem] w-[12.5rem] cursor-pointer rounded-[0.5rem] text-[1.25rem] text-black bg-[#ededed] duration-300'
                        >
                            <i className="fa-solid fa-xmark"></i>
                            <span className='ml-[1rem]'>Cancel Order</span>
                        </button>
                        <button
                            onClick={() => toast.success('Order placed successfully')}
                            className='py-[1.25rem] w-[12.5rem] cursor-pointer rounded-[0.5rem] text-[1.25rem] text-white bg-[#24252a] duration-300'
                        >
                            <i className="fa-solid fa-list-check"></i>
                            <span className='ml-[1rem]'>Place Order</span>
                        </button>
                    </div>
                </div>

            </div>

            <Divider />
            <Footer />
        </>
    );
}

export default Checkout;