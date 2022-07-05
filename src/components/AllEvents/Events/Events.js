import React, { useEffect, useState } from 'react';
import eventImg from '../../../images/best-s1.png';
import { Link } from 'react-router-dom';
import useEvents from '../../../hooks/useEvents';



const Events = () => {

    const [events] = useEvents();

    return (
        <section className='events py-24'>
            <div className="container mx-auto">
                <div className='text-center space-y-2'>
                    <h1 className='text-4xl'>Our Adventures</h1>
                    <p className='text-base text-gray-400'>Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus. Suspendissendt blandit interdum.</p>
                </div>

                <div className="grid grid-cols-3 gap-8 mt-20">



                    {events.length === 0 ?
                        [...Array(3).keys()].map(number =>
                            <div key={number} className='shadow-xl rounded-lg animate-pulse'>
                                <div>
                                    <div className='bg-slate-400 w-full h-60 rounded-t-lg'></div>
                                </div>
                                <div className='space-y-8 p-5'>
                                    <div className='h-3 w-32 rounded-full bg-slate-400'></div>
                                    <div className='flex justify-between'>
                                        <button className='py-5 px-12 rounded-full bg-slate-400'></button>
                                        <div className='h-2 w-16 bg-slate-400 rounded-full'></div>
                                    </div>
                                </div>
                            </div>
                            )

                        :
                        events.map(event => (
                            <div key={event._id} className='shadow-xl rounded-lg'>
                                <div>
                                    <img src={event.img} alt="" className='w-full rounded-t-lg' />
                                </div>
                                <div className='space-y-8 p-5'>
                                    <h4 className='text-2xl'>{event.title}</h4>
                                    <div className='flex justify-between'>
                                        <button className='flex items-center py-3 px-8 border border-red-600 hover:bg-red-600 text-red-600 hover:text-white transition ease-in rounded-full space-x-3'><Link to={`/booking/${event._id}`}><span>Book Now</span> <i className="fa-solid fa-arrow-right text-sm"></i></Link></button>
                                        <p className='space-x-3 flex items-center'><span className='text-2xl text-red-600'>${event.cost}</span> <span>Per Person</span></p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }







                </div>



            </div>
        </section>
    );
};

export default Events;