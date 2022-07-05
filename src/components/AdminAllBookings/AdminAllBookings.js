import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Modal from 'react-modal';
import spinner from '../../images/Eclipse-1s-200px.svg';

const AdminAllBookings = () => {

    const [bookings, setBookings] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [deleteId, setDeleteId] = useState(false);
    const [load, setLoad] = useState(false);

    const [bookingStatus, setBookingStatus] = useState(false);


    useEffect(() => {
        fetch('https://scenic-congaree-34824.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    const handleDelete = id => {
        setLoad(true);
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
                setLoad(false);
                setModalOpen(false);
                toast.success('Booking Deleted Sucessfully.', {
                    duration: 3000,
                    iconTheme: {
                        primary: '#DC2626',
                        secondary: '#fff'
                    }
                })
            })
    }

    const handleStatusPending = id => {
       
        const uri = `https://scenic-congaree-34824.herokuapp.com/bookingstatus/${id}`;
        fetch(uri, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                
            })
    }

    const handleStatusApproved = id => {
        
        const uri = `https://scenic-congaree-34824.herokuapp.com/bookingstatus/${id}`;
        fetch(uri, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'pending' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                
            })
    }


    return (
        <section className='admin-all-bookings py-20'>
            <div className="container mx-auto">
                {/* MODAL AREA */}
                <Modal ariaHideApp={false} isOpen={modalOpen} className="flex items-center justify-center h-screen z-50">
                    <div className='bg-white rounded-lg shadow-lg w-96 p-5 border text-center space-y-5'>
                        <i class=""></i>
                        {load ? <img className='w-24 mx-auto' src={spinner} alt="" /> : <i className="fa-solid fa-face-frown text-5xl text-amber-600"></i>}
                        <h1 className='text-2xl'>Are You Sure You Want to Delete?</h1>

                        <div className='space-x-5'>
                            <button onClick={() => setModalOpen(false)} className='text-red-600 hover:text-white border border-red-600 hover:border-transparent hover:bg-[#162B32] py-1 px-6 rounded'>No</button>
                            <button onClick={() => { handleDelete(deleteId) }} className='text-white bg-red-600 hover:bg-[#162B32] py-1 px-6 rounded'>Yes</button>
                        </div>
                    </div>
                </Modal>
                {/* MODAL AREA ENDS */}
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
                            <th className='text-xl text-center'>Status</th>
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
                                    <td className='border text-center'>
                                        {booking.status === 'pending' ?
                                            
                                        <button onClick={() => {handleStatusPending(booking._id)}} className='bg-cyan-600 hover:bg-[#162B32] transition ease-in text-white py-2 px-4 rounded'>Pending</button>
                                        :
                                        <button onClick={() => {handleStatusApproved(booking._id)}} className='bg-green-600 hover:bg-[#162B32] transition ease-in text-white py-2 px-4 rounded'>Approved</button>
                                        }
                                    </td>

                                    <td className='border text-center'><button onClick={() => { setModalOpen(true); setDeleteId(booking._id) }} className='bg-red-600 hover:bg-[#162B32] transition ease-in text-white py-2 px-4 rounded'>Delete</button></td>
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