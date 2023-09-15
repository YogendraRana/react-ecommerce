import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="px-[10rem] py-[5rem] border-t">
            <div className="flex justify-between">
                <div>
                    <h2 className='mb-[1rem] text-[1.8rem] font-semibold'>Main Menu</h2>
                    <ul className='flex flex-col gap-[0.5rem] text-[1.25rem]'>
                        <Link to="#"><li>Home</li></Link>
                        <Link to="#"><li>About</li></Link>
                        <Link to="#"><li>Contact</li></Link>
                        <Link to="#"><li>Cart</li></Link>
                        <Link to="#"><li>Register</li></Link>
                    </ul>
                </div>

                <div>
                    <h2 className='mb-[1rem] text-[1.8rem] font-semibold'>Shop by category</h2>
                    <ul className='flex flex-col gap-[0.5rem] text-[1.25rem]'>
                        <Link to="#"><li>New Arrivals</li></Link>
                        <Link to="#"><li>Special Offers</li></Link>
                        <Link to="#"><li>Highest Selling</li></Link>
                        <Link to="#"><li>Men</li></Link>
                        <Link to="#"><li>Women</li></Link>
                        <Link to="#"><li>Kids</li></Link>
                    </ul>
                </div>

                <div>
                    <h2 className='mb-[1rem] text-[1.8rem] font-semibold'>Support</h2>
                    <ul className='flex flex-col gap-[0.5rem] text-[1.25rem]'>
                        <Link to="#"><li>Troubleshooting</li></Link>
                        <Link to="#"><li>Common Questions</li></Link>
                        <Link to="#"><li>Report a Bug</li></Link>
                    </ul>
                </div>

                <div>
                    <h2 className='mb-[1rem] text-[1.8rem] font-semibold'>Company</h2>
                    <ul className='flex flex-col gap-[0.5rem] text-[1.25rem]'>
                        <Link to="#"><li>Customer Service</li></Link>
                        <Link to="#"><li>Terms of Use</li></Link>
                        <Link to="#"><li>Privacy</li></Link>
                    </ul>
                </div>


                <div className="flex flex-col justify-between items-start">
                    <div className="mb-[2rem]">
                        <h2 className='mb-[0.5rem] text-[1.8rem] font-semibold'>Follow us on</h2>
                        <div className="flex gap-[1rem]">
                            <Link to="#" className='h-[3.5rem] w-[3.5rem] gb-[#ededed] rounded-full grid place-items-center bg-[#ededed]'><i className="fab fa-facebook-f"></i></Link>
                            <Link to="#" className='h-[3.5rem] w-[3.5rem] gb-[#ededed] rounded-full grid place-items-center bg-[#ededed]'><i className="fab fa-instagram"></i></Link>
                            <Link to="#" className='h-[3.5rem] w-[3.5rem] gb-[#ededed] rounded-full grid place-items-center bg-[#ededed]'><i className="fab fa-twitter"></i></Link>
                        </div>
                    </div>

                    <div className="mb-[2rem]">
                        <h2 className='mb-[0.5rem] text-[1.5rem] font-semibold'>Payment Methods</h2>
                        <div className="text-[4rem] flex gap-[1rem]">
                            <i className="fab fa-cc-visa"></i>
                            <i className="fab fa-cc-mastercard"></i>
                            <i className="fab fa-cc-paypal"></i>
                        </div>
                    </div>

                    <div>
                        <h2 className='mb-[0.5rem] text-[1.5rem] font-semibold'>Subscribe for newsletter</h2>
                        <form className='flex flex-col gap-[1rem]'>
                            <input
                                type="email"
                                placeholder="Email address..."
                                required 
                                className='w-[20rem] p-[1rem] border rounded-[0.5rem] text-[1.25rem] placeholder:text-[1.25rem]'
                            />
                            <button type="submit" className="p-[1rem] rounded-[0.5rem] text-white text-[1.25rem] bg-red-500">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;