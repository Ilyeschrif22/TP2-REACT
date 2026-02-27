import { Card, Col } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

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
                        <Link to={`/events/${event.name}`}>{event.name}</Link>
                    </Card.Title>
                    <Card.Text>{event.description}</Card.Text>
                    <Card.Text>Price: ${event.price}</Card.Text>
                    <Card.Text>nbTickets: {nbTickets}</Card.Text>
                    <Card.Text>nbParticipants: {nbParticipants}</Card.Text>
                    <div className="gap">
                        <button onClick={handleLike}>
                            {like ? "like" : "dislike"}
                        </button>
                        <button onClick={bookingMessage} disabled={isSoldOut}>
                            {isSoldOut ? "Sold Out" : "Book event"}
                        </button>

                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Event;