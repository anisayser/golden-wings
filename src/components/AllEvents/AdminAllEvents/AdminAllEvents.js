import React from 'react';
import toast from 'react-hot-toast';
import useEvents from '../../../hooks/useEvents';

const AdminAllEvents = () => {

    const [events, setEvents] = useEvents();

    const handleDelete = id => {
        const process = window.confirm('Your you sure you want to delete The Event?')

        if (process) {
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
                    toast.success('Event Deleted Sucessfully.', {
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
        <section className='admin-all-events py-20'>
            <div className="container mx-auto">
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
                                    <td className='border text-center'><button onClick={() => handleDelete(event._id)} className='bg-red-600 hover:bg-[#162B32] transition ease-in text-white py-2 px-4 rounded'>Delete</button></td>
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