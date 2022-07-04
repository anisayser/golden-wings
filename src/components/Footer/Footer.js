import React from 'react';
import { Link } from 'react-router-dom';
import fg from '../../images/fg-1.png';
import logo from '../../images/logo-w.png';
import './Footer.css';


const Footer = () => {
    return (
        <section className='footer text-white mt-20'>

            <div className='pt-20 pb-5 footer-one bg-[#2D373C] bg-fixed'>
                <div className="container mx-auto">
                    <div className="grid grid-cols-4 gap-4">
                        <div className='space-y-5'>
                            <p>Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus. Suspendissendt molestie turpis nec lacinia vehicula.</p>

                            <div className='space-y-3'>
                                <h2 className='text-4xl'>Follow Us On: </h2>
                                <div className='flex space-x-3'>
                                    <i className="fa-brands fa-facebook-f w-10 h-10 bg-red-600 hover:bg-transparent border border-red-600 text-white hover:text-red-600 transition-all ease-in rounded-full flex items-center justify-center"></i>
                                    <i className="fa-brands fa-instagram w-10 h-10 bg-red-600 hover:bg-transparent border border-red-600 text-white hover:text-red-600 transition-all ease-in rounded-full flex items-center justify-center"></i>
                                    <i className="fa-brands fa-twitter w-10 h-10 bg-red-600 hover:bg-transparent border border-red-600 text-white hover:text-red-600 transition-all ease-in rounded-full flex items-center justify-center"></i>
                                    <i className="fa-brands fa-whatsapp w-10 h-10 bg-red-600 hover:bg-transparent border border-red-600 text-white hover:text-red-600 transition-all ease-in rounded-full flex items-center justify-center"></i>
                                </div>
                            </div>
                        </div>

                        <div className='space-y-5'>
                            <h1 className='text-4xl'>Quick Links</h1>
                            <nav className='flex flex-col space-y-2'>
                                <Link to="/">Home</Link>
                                <Link to="/">About</Link>
                                <Link to="/">Events</Link>
                                <Link to="/">Bookings</Link>
                                <Link to="/">Login</Link>
                                <Link to="/">Home</Link>
                            </nav>
                        </div>

                        <div className='space-y-5'>
                            <h1 className='text-4xl'>Tour Types</h1>
                            <nav className='flex flex-col space-y-2'>
                                <Link to="/">Wild & Adventure Tours</Link>
                                <Link to="/">Group Tour</Link>
                                <Link to="/">Seasonal Tours</Link>
                                <Link to="/">Relaxation Tours</Link>
                                <Link to="/">Family Friendly Tours</Link>
                            </nav>
                        </div>

                        <div className='space-y-5'>
                            <h1 className='text-4xl'>Gallery</h1>
                            <div className="grid grid-cols-3 gap-4">
                                <img src={fg} alt="" className='rounded w-full' />
                                <img src={fg} alt="" className='rounded w-full' />
                                <img src={fg} alt="" className='rounded w-full' />
                                <img src={fg} alt="" className='rounded w-full' />
                                <img src={fg} alt="" className='rounded w-full' />
                                <img src={fg} alt="" className='rounded w-full' />
                            </div>
                        </div>


                        <div className='col-span-4 border mt-20'>
                            {/* BORDER */}
                        </div>

                        <div>
                            <h1 className='text-2xl'>Contact Us:</h1>
                        </div>
                        <div>
                            <h1 className='text-xl'><i className="fa-solid fa-phone"></i> +1 763-227-5032</h1>
                        </div>
                        <div>
                            <h1 className='text-xl'><i className="fa-solid fa-envelope-open"></i> info@goldenwings.com</h1>
                        </div>
                        <div>
                            <h1 className='text-xl'><i className="fa-solid fa-location-dot"></i> 2752 Willison Street Eagan, United State</h1>
                        </div>

                    </div>
                </div>
            </div>

            <div className='bg-black py-5'>
                <div className="container mx-auto">
                    <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                            <p>Copyright 2022 Golden Wings | Design Cloned By Anis Ayser</p>
                        </div>
                        <div>
                            <img className='mx-auto' src={logo} alt="" />
                        </div>
                        <div>
                            <p><Link to='/'>Terms & Conditions</Link> | <Link to='/'>Privacy Policy</Link></p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Footer;