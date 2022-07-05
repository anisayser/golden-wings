import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';
import auth from '../../../firebaseInit';

const MyEvents = () => {
    const [user] = useAuthState(auth);

    const [myEvents, setMyEvents] = useState([]);

    useEffect(() => {
        const uri = `https://scenic-congaree-34824.herokuapp.com/myevents/${user.email}`;
        fetch(uri)
            .then(res => res.json())
            .then(data => setMyEvents(data))
    }, []);


    const handleDelete = id => {
        const process = window.confirm('Your you sure you want to delete your Event?')
        if (process) {
            const uri = `https://scenic-congaree-34824.herokuapp.com/myevent/${id}`;
            fetch(uri, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = myEvents.filter(events => events._id !== id)
                        setMyEvents(remaining);
                    }
                })
                .finally(() => {
                    toast.success('Your Event Deleted Sucessfully', {
                        duration: 3000, iconTheme: {
                            primary: '#DC2626',
                            secondary: '#fff'
                        }
                    })
                })
        }

    }

    {/* <h1 className='text-center text-8xl col-span-2'>You Didn't Book Any Event Yet.</h1> */ }

    return (
        <section className='my-events py-20'>
            <div className="container mx-auto">
                <h1 className='text-center text-4xl mb-14'>My Events</h1>
                <Toaster />
                <div className="grid grid-cols-2 gap-8">
                    {myEvents.length === 0 ?
                        [...Array(2).keys()].map(number =>
                            <div key={number} className='animate-pulse flex space-x-5 shadow-lg p-5 rounded-lg relative'>
                                <div className="w-80 h-52 rounded-lg bg-slate-400"></div>
                                <div className='space-y-8'>
                                    <div className='bg-slate-400 h-3 w-52 rounded-full'></div>
                                    {/* <p>Name: {events.name}</p> */}
                                    <div className='bg-slate-400 h-2 w-16 rounded-full'></div>
                                    <div className='bg-slate-400 h-2 w-36 rounded-full'></div>
                                    <div className='bg-slate-400 h-2 w-32 rounded-full'></div>
                                    <div className='absolute right-0 bottom-0'>
                                        <button className='py-4 px-8 bg-slate-400  rounded-br-lg rounded-tl-lg shadow-xl'></button>
                                    </div>
                                </div>
                            </div>
                        )
                        :
                        myEvents.map(events => (
                            <div key={events._id} className='flex space-x-5 shadow-lg p-5 rounded-lg relative'>
                                <img src={events.theEvent.img} className="rounded-lg" alt="" />
                                <div className='space-y-1'>
                                    <h4 className='text-xl'>{events.theEvent.title}</h4>
                                    {/* <p>Name: {events.name}</p> */}
                                    <p>Persons: {events.persons}</p>
                                    <p>Fee: <span className='text-2xl text-red-600'> ${events.theEvent.cost}</span> Per Person</p>
                                    <p>Total: <span className='text-2xl text-red-600'> ${parseInt(events.persons) * events.theEvent.cost}</span></p>
                                    <div className='absolute right-0 bottom-0'>
                                        <button onClick={() => handleDelete(events._id)} className='py-2 px-4 bg-red-600 text-white rounded-br-lg rounded-tl-lg shadow-xl'>Cancel</button>
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

export default MyEvents;