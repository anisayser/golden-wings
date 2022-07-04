import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const AdminAllBookings = () => {

    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('https://scenic-congaree-34824.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    const handleDelete = id => {
        const process = window.confirm('Your you sure you want to delete The Booking?')
        if (process) {
            const uri = `https://scenic-congaree-34824.herokuapp.com/myevent/${id}`;
            fetch(uri, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining);
                    }
                })
                .finally(() => {
                    toast.success('Booking Deleted Sucessfully.', {
                        duration: 3000,
                        iconTheme: {
                            primary: '#DC2626',
                            secondary: '#fff'
                        }
                    })
                })
        }



    }


    return (
        <section className='admin-all-bookings py-20'>
            <div className="container mx-auto">
                <h1 className='text-4xl text-center mb-14'>All Events</h1>
                <table className='w-full'>
                    <thead className='text-left bg-[#162B32] text-white'>
                        <tr>
                            <th className='text-xl p-5 rounded-tl-lg'>Events</th>
                            <th className='text-xl pl-5'>Event Title</th>
                            <th className='text-xl pl-5'>Tourist</th>
                            <th className='text-xl pl-5'>Email</th>
                            <th className='text-xl text-center'>Per Person</th>
                            <th className='text-xl pl-5'>Peoples</th>
                            <th className='text-xl pl-5'>Total</th>
                            <th className='text-xl text-center rounded-tr-lg'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => (
                                <tr key={booking._id}>
                                    <td className='border p-3 '><img className='rounded-lg w-32' src={booking.theEvent.img} alt="" /></td>
                                    <td className='border pl-5'>{booking.theEvent.title}</td>
                                    <td className='border pl-5'>{booking.name}</td>
                                    <td className='border pl-5'>{booking.email}</td>
                                    <td className='border text-center'>${booking.theEvent.cost}</td>
                                    <td className='border pl-5'>{booking.persons}</td>
                                    <td className='border text-center'>${booking.theEvent.cost * parseInt(booking.persons)}</td>

                                    <td className='border text-center'><button onClick={() => handleDelete(booking._id)} className='bg-red-600 hover:bg-[#162B32] transition ease-in text-white py-2 px-4 rounded'>Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AdminAllBookings;