import { useEffect } from "react";
import { useState } from "react";
import eventsData from "../data/events.json";
import Event from "./Event";

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        setEvents(eventsData);
        console.log("Events data: ", eventsData);
    }, [])

   
    


  return (
    <div>
    <h1>Events</h1>
    {events.map((event, index) => (
     <Event key={index} event={event}/>
    ))}
       
    </div>
  );
};

export default Events;