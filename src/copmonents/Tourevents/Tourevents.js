import React from 'react';
import {Row, Spinner} from 'react-bootstrap';
import useTourEvents from '../Hooks/Hook';
import Event from './Event';
const Tourevents = () => {
    const {events,setEvents} = useTourEvents()
    return (
        <>
        {
            events.length ?         <Row className="g-3 mx-auto mt-4">
                <h2 className="text-center mt-4 mb-4">Our Regular Tour Events</h2>
            
            {
                events.map(event => <Event key={event.id} event={event}></Event>)
            }
        </Row> : <Spinner animation="border" variant="dark" />
        }

        </>
    );
};

export default Tourevents;