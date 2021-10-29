import React from 'react';
import {Row} from 'react-bootstrap';
import useTourEvents from '../Hooks/Hook';
import Event from './Event';
const Tourevents = () => {
    const {events,setEvents} = useTourEvents()
    return (
        <Row className="g-3 mx-auto mt-4">
            {
                events.map(event => <Event key={event.id} event={event}></Event>)
            }
        </Row>
    );
};

export default Tourevents;