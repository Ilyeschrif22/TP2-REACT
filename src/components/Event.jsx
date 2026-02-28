import { Card, Col } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import { deleteEvent } from "../service/api";

const Event = ({ event, onBook }) => {
    const [like, setLike] = useState(event.like);
    const [nbTickets, setNbTickets] = useState(event.nbTickets);
    const [nbParticipants, setNbParticipants] = useState(event.nbParticipants);

    const isSoldOut = nbTickets === 0;

    const handleLike = () => setLike(!like);

    const bookingMessage = () => {
        if (isSoldOut) return;
        setNbTickets(nbTickets - 1);
        setNbParticipants(nbParticipants + 1);
        onBook(event);
    };

    const handleDelete = async () => {
    try {
        await deleteEvent(event.id);
        window.location.reload();
    } catch (error) {
        console.error("Error deleting event:", error);
    }
    };

    return (
        <Col>
            <Card style={{ width: '500px' }}>

                <div style={{ position: 'relative' }}>
                    <Card.Img
                        variant="top"
                        src={`/images/${event.img}`}
                        style={{ height: '320px', filter: isSoldOut ? 'grayscale(100%)' : 'none' }}
                    />
                    {isSoldOut && (
                        <img
                            src="/images/sold_out.png"
                            alt="Sold Out"
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '60%',
                            }}
                        />
                    )}
                </div>

                <Card.Body>
                    <Card.Title>
                        <Link to={`/events/${event.id}`} className="text-decoration-none text-dark">
                            {event.name}
                        </Link>
                    </Card.Title>

                    <Card.Text>{event.description}</Card.Text>
                    <Card.Text>Price: ${event.price}</Card.Text>
                    <Card.Text>nbTickets: {nbTickets}</Card.Text>
                    <Card.Text>nbParticipants: {nbParticipants}</Card.Text>

                    <div className="d-flex gap-2 flex-wrap mt-3">

                        <button
                            className="btn btn-dark"
                            onClick={handleLike}
                        >
                            {like ? "Dislike" : "Like"}
                        </button>

                        <button
                            className="btn btn-dark"
                            onClick={bookingMessage}
                            disabled={isSoldOut}
                        >
                            {isSoldOut ? "Sold Out" : "Book Event"}
                        </button>

                        <Link
                            to={`/update/${event.id}`}
                            className="btn btn-dark"
                        >
                            Update
                        </Link>

                        <button
                            className="btn btn-dark"
                            onClick={handleDelete}
                        >
                            Delete
                        </button>

                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Event;