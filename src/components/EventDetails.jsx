import eventsData from "../data/events.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventById } from "../service/api";

const EventDetails = () => {

  const { id } = useParams()

  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEventById = async () => {
      try {
        const response = await getEventById(id);
        setEvent(response);
      } catch (error) {
        console.error("Event does not exist", error);
      }
    }

    fetchEventById();
  }, [id]);


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