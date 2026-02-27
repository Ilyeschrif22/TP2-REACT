import eventsData from "../data/events.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";               

const EventDetails = () => {
  
    const {name} = useParams()

    const [event, setEvent] = useState(null);

    useEffect(() => {
        console.log(name);
        const foundEvent = eventsData.find(event => event.name === name);
        setEvent(foundEvent);
    }, [name]);
  

  return (
    <div>
      <h2>EventDetails</h2>
        <h1>{event?.name}</h1>
        <p>{event?.description}</p>
        <p>Price: ${event?.price}</p>
        <p>nbTickets: {event?.nbTickets}</p>
        <p>nbParticipants: {event?.nbParticipants}</p>
    </div>
  );
};

export default EventDetails;