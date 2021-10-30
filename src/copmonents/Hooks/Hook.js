import {useEffect, useState} from 'react';

const useTourEvents = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('https://rocky-fjord-96059.herokuapp.com/events')
        .then(res => res.json())
        .then(data => setEvents(data))
    },[])

    return {
        events,
        setEvents
    }
}

export default useTourEvents;