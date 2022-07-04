import React, { useEffect, useState } from 'react';

const useEvents = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('https://scenic-congaree-34824.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    return [events, setEvents];

};

export default useEvents;