import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import auth from '../../firebaseInit';


const BookingForm = () => {

    const [user] = useAuthState(auth);

    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const personsRef = useRef();
    // const eventRef = useRef();
    const messageRef = useRef();

    const { id } = useParams();
    const [theEvent, setTheEvent] = useState({});
    useEffect(() => {
        const uri = `https://scenic-congaree-34824.herokuapp.com/event/${id}`;
        fetch(uri)
            .then(res => res.json())
            .then(data => setTheEvent(data))
    }, [])



    const handleBooking = e => {
        e.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const persons = personsRef.current.value;
        const message = messageRef.current.value;
        const bookingData = { name, email, phone, persons, message, theEvent, status: 'pending' };

        fetch('https://scenic-congaree-34824.herokuapp.com/mybooking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(bookingData)
        })
            .then(res => res.json())
            .then(data => { })
            .finally(() => {
                toast.success('Your Booking has submited Sucessfully', { duration: 4000, position: 'top-center' });
                phoneRef.current.value = ''
                personsRef.current.value = ''
                messageRef.current.value = ''
            })
    }



    return (
        <section className='booking-form mt-20'>
            <Toaster />
            <div className="container mx-auto">

                <div className='px-2'>
                    <form onSubmit={handleBooking}>
                        <div className='flex flex-col items-center w-full sm:w-2/3 lg:w-[33rem] mx-auto rounded-xl shadow-xl'>
                            <div className='flex justify-between w-full bg-[#162B32] text-white p-5 rounded-t-xl shadow-xl'>
                                <h1 className='text-2xl'>Book This Tour</h1>
                                <p><span className='text-2xl text-red-600'>${theEvent.cost}</span> Per Person</p>
                            </div>
                            <div className='space-y-5 p-5'>

                                <input type="text" ref={nameRef} name="name" id="name" value={user.displayName || ''} readOnly className='w-full border rounded-full p-3' />

                                <input type="email" ref={emailRef} name="email" value={user.email || ''} id="email" readOnly className='w-full border rounded-full p-3' />

                                <input type="text" required ref={phoneRef} name="phone" id="phone" placeholder='Phone' className='w-full border rounded-full p-3' />

                                <input type="number" required ref={personsRef} name="persons" id="persons" placeholder='Total Persons' className='w-full border rounded-full p-3' />

                                <input type="text" value={theEvent.title || ''} readOnly name="event" id="event" placeholder='Event Name' className='w-full border rounded-full p-3' />

                                <textarea name="message" ref={messageRef} id="message" placeholder='Your Message' className='w-full border rounded-xl p-3'></textarea>

                                <input type="submit" value="Book Now" className='cursor-pointer w-full p-3 bg-red-600 hover:bg-[#162B32] text-white hover:text-red-600 transition-all ease-in rounded-full' />

                            </div>
                        </div>
                    </form>
                </div>
                
            </div>

        </section>
    );
};

export default BookingForm;