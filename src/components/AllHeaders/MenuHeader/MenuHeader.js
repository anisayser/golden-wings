import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../firebaseInit';
import logo from '../../../images/newLogo.png';
import toast, { Toaster } from 'react-hot-toast';
const MenuHeader = () => {
    const [user] = useAuthState(auth);

    return (
        <section className='menu-header sticky top-0 z-20'>
            <Toaster />
            {/* <!-- This example requires Tailwind CSS v2.0+ --> */}

            <nav className="bg-black opacity-80">
                <div className="container mx-auto">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* <!-- Mobile menu button--> */}
                            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                {/* <!--
                                Icon when menu is closed.

                                Heroicon name: outline/menu

                                Menu open: "hidden", Menu closed: "block"
          --> */}
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                {/* <!--
                                Icon when menu is open.

                                Heroicon name: outline/x

                                Menu open: "block", Menu closed: "hidden"
          --> */}
                                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0 flex items-center">
                                <img className="block lg:hidden h-8 w-auto" src={logo} alt="Workflow" />
                                <img className="hidden lg:block w-40 w-auto" src={logo} alt="Workflow" />
                            </div>
                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-4">
                                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                    <NavLink to="/home" className="text-white hover:bg-gray-900 px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</NavLink>

                                    <NavLink to="/about" className="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</NavLink>

                                    {user && <NavLink to="/myevents" className="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">My Events</NavLink>}

                                    {user && <NavLink to="/bookings" className="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Bookings</NavLink>}
                                    {user && <NavLink to="/allevents" className="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">All Events</NavLink>}
                                    {user && <NavLink to="/addevents" className="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Add Events</NavLink>}
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            {user ?
                                <button onClick={() => signOut(auth).then(() => { toast.success('Loged Out Sucessfully', { className: 'z-50', duration: 3000, position: 'bottom-center', icon: <i className="fa-solid fa-right-from-bracket text-red-600"></i>, iconTheme: { primary: '#DC2626', secondary: '#fff' } }) })} className='bg-red-600 hover:bg-red-700 text-white py-2 px-5 rounded'>Logout</button>
                                :
                                <button className='bg-red-600 hover:bg-red-700 text-white py-2 px-5 rounded'><Link to='/login'>Login</Link></button>
                            }
                        </div>
                    </div>
                </div>

                {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                <div className="sm:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                        <NavLink to="/home" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</NavLink>

                        <NavLink to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</NavLink>

                        <NavLink to="/events" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</NavLink>

                        <NavLink to="/bookings" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</NavLink>
                    </div>
                </div>
            </nav>

        </section>
    );
};

export default MenuHeader;