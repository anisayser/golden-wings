import React, { useRef } from 'react';
import toast from 'react-hot-toast';

const AdminAddEvents = () => {

    const titleRef = useRef();
    const costRef = useRef();
    const imgRef = useRef();

    const handleEventCreate = e => {
        e.preventDefault();
        const title = titleRef.current.value;
        const cost = costRef.current.value;
        const img = imgRef.current.value;
        const eventData = {title, cost, img};

        fetch('http://localhost:5000/addevent',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => res.json())
        .then(data => {})
        .finally(()=>{
            toast.success('Event Added Sucessfully',{duration: 3000})
        })


    }


    return (
        <section className='admin-add-events py-20'>
            <div className="container mx-auto">
                <div className='px-2'>
                    <form onSubmit={handleEventCreate}>
                        <div className='flex flex-col items-center w-full sm:w-2/3 lg:w-[33rem] mx-auto rounded-xl shadow-xl'>
                            <div className='w-full bg-[#162B32] text-white p-5 rounded-t-xl shadow-xl text-center'>
                                <h1 className='text-2xl'>Add Event</h1>

                            </div>
                            <div className='space-y-5 p-5'>

                                <input type="text" ref={titleRef} name="title" id="title" placeholder='Event Title' className='w-full border rounded-full p-3' />

                                <input type="number" required ref={costRef} name="cost" id="cost" placeholder='Cost Per Person' className='w-full border rounded-full p-3' />

                                <input type="text" ref={imgRef} name="image" id="image" placeholder='Image Url' className='w-full border rounded-full p-3' />

                                <input type="submit" value="Book Now" className='cursor-pointer w-full p-3 bg-red-600 hover:bg-[#162B32] text-white hover:text-red-600 transition-all ease-in rounded-full' />

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AdminAddEvents;