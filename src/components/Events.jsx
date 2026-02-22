import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import eventsData from "../data/events.json";
import Event from "./Event";

const Events = () => {
    const [events, setEvents] = useState([]);
    const [bookedEvent, setBookedEvent] = useState(null);

    useEffect(() => {
        setEvents(eventsData);
    }, []);

    useEffect(() => {
        if (bookedEvent === null) return;

        const timer = setTimeout(() => {
            setBookedEvent(null); 
        }, 3000);

        return () => clearTimeout(timer); 
    }, [bookedEvent]);

    return (
        <div>
            <h1>Events</h1>

            <Alert
                show={bookedEvent !== null}
                variant="success"
                onClose={() => setBookedEvent(null)}
                dismissible
            >
                You have booked for <strong>{bookedEvent?.name}</strong> event!
            </Alert>

            <div className="events-container">
                {events.map((event, index) => (
                    <Event key={index} event={event} onBook={setBookedEvent} />
                ))}
            </div>
        </div>
    );
};

export default Events;