import { Link } from 'react-router-dom';
import Divider from '../utils/Divider';
import Footer from '../layout/Footer';

const Checkout = () => {

    return (
        <>
            <div className='px-[10rem]'>
                <div className="h-[30vh] flex flex-col justify-center items-center relative">
                    <h2 className='text-[3rem]'>Checkout</h2>
                    <div className='mt-[1rem] text-[1.25rem]'>
                        <Link to='/'>Home</Link>
                        <span className='mx-[1rem]'>.</span>
                        <span>Checkout</span>
                    </div>
                </div>

                <div className="p-[2rem] text-[1.25rem] bg-[#ededed]">
                    <i className="fa-regular fa-user"></i>
                    <span className='ml-[1rem]'>Don't have an account? You need to have an account to make payment.</span>
                    <Link to='/join'>Click here to <u>register</u></Link>
                </div>

                <Divider />
                {/* shipping detail */}
                <div>
                    <h2 className='text-[2rem] mb-[2rem]'>Shipping Details</h2>

                    <form className='grid grid-cols-2 gap-[1rem] justify-between flex-wrap'>
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

                    <form className='grid grid-cols-2 gap-[1rem]'>
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
                    <h2 className='text-[2rem] pb-[1rem] mb-[2rem] text-center border-b'>Order Summary</h2>

                    <div className='grid grid-cols-3 gap-[1rem]'>
                        <label>
                            <h2 className='text-[1.5rem] text-[#24252a]'>Order Total</h2>
                            <input value={22000} disabled className='w-[100%] p-[1rem] text-[1.25rem] border rounded-[0.5rem] placeholder:text-[1.25rem]' />
                        </label>

                        <label>
                            <h2 className='text-[1.5rem] text-[#24252a]'>Shipping Fee</h2>
                            <input value={100} disabled className='w-[100%] p-[1rem] text-[1.25rem] border rounded-[0.5rem] placeholder:text-[1.25rem]' />
                        </label>

                        <label>
                            <h2 className='text-[1.5rem] text-[#24252a]'>Card Number</h2>
                            <input value="1234-1234-1234-1234" disabled className='w-[100%] p-[1rem] text-[1.25rem] border rounded-[0.5rem] placeholder:text-[1.25rem]' ></input>
                        </label>
                    </div>

                    <Divider />
                    
                    <div className='pt-[2rem] flex gap-[1rem] justify-end border-t'>
                        <button className='py-[1.25rem] w-[12.5rem] bg-[#ededed] cursor-pointer rounded-[0.5rem] text-[1.25rem]'>
                            <i className="fa-solid fa-xmark"></i>
                            <span className='ml-[1rem]'>Cancel Order</span>
                        </button>
                        <button className='py-[1.25rem] w-[12.5rem] bg-[#ededed] cursor-pointer rounded-[0.5rem] text-[1.25rem]'>
                            <i className="fa-solid fa-house"></i>
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