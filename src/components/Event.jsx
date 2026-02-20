import { Alert, Card, Col } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";


const Event = ({ event }) => {


    const [like, setLike] = useState(event.like);
    const [showAlert, setShowAlert] = useState(false);
    const [nbTickets, setNbTickets] = useState(event.nbTickets);
    const [nbParticipants, setNbParticipants] = useState(event.nbParticipants);

    const handleLike = () => {
        setLike(!like);
    }

    const bookingMessage = () => {
        setShowAlert(true);
        setNbTickets(nbTickets - 1);
        setNbParticipants(nbParticipants + 1);
    }


    return (
        <>

            <Alert show={showAlert} variant="success" onClose={() => setShowAlert(false)} dismissible>
                You have booked for {event.name} event!
            </Alert>

            <Col>
                <Card style={{ width: '500px' }}>
                    <Card.Img
                        variant="top"
                        src={`/images/${event.img}`}
                        style={{ height: '320px' }}
                    />

                    <Card.Body >
                        <Card.Title>{event.name}</Card.Title>
                        <Card.Text>
                            {event.description}
                        </Card.Text>

                        <Card.Text>
                            Price: ${event.price}
                        </Card.Text>

                        <Card.Text>
                            nbTickets: {nbTickets}
                        </Card.Text>

                        <Card.Text>
                            nbParticipants: {nbParticipants}
                        </Card.Text>

                        <div className="gap">
                            <button
                                onClick={handleLike}
                            >
                                {like ? "like" : "dislike"}
                            </button>


                            <button onClick={bookingMessage}>
                                Book event
                            </button>

                        </div>
                    </Card.Body>



                </Card>
            </Col>
        </>
    );
};

export default Event;