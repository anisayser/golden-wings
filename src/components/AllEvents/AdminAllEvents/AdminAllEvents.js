import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ReactModal from 'react-modal';
import useEvents from '../../../hooks/useEvents';
import Modal from 'react-modal';
import spinner from '../../../images/Eclipse-1s-200px.svg';



const AdminAllEvents = () => {

    const [events, setEvents] = useEvents();
    const [modalOpen, setModalOpen] = useState(false);
    const [deleteId, setDeleteId] = useState(false);
    const [load, setLoad] = useState(false);


    const handleDelete = id => {
        // const process = window.confirm('Your you sure you want to delete The Event?')
        setLoad(true);
        const uri = `https://scenic-congaree-34824.herokuapp.com/events/${id}`;
        fetch(uri, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = events.filter(event => event._id !== id);
                    setEvents(remaining);
                }
            })
            .finally(() => {
                setLoad(false);
                if (!load) {
                    setModalOpen(false);
                }
                toast.success('Event Deleted Sucessfully.', {
                    duration: 3000,
                    iconTheme: {
                        primary: '#DC2626',
                        secondary: '#fff'
                    }
                })
            })
    }


    return (
        <section className='admin-all-events py-20'>
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
                            <th className='text-xl pl-5'>Title</th>
                            <th className='text-xl text-center'>Cost</th>
                            <th className='text-xl text-center rounded-tr-lg'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            events.map(event => (
                                <tr key={event._id}>
                                    <td className='border p-3 '><img className='rounded-lg w-32' src={event.img} alt="" /></td>
                                    <td className='border pl-5'>{event.title}</td>
                                    <td className='border text-center'>${event.cost}</td>
                                    <td className='border text-center'><button onClick={() => { setModalOpen(true); setDeleteId(event._id) }} className='bg-red-600 hover:bg-[#162B32] transition ease-in text-white py-2 px-4 rounded'>Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AdminAllEvents;