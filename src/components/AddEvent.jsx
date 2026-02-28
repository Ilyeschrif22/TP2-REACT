import { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { addEvent } from "../service/api";
import { useNavigate } from "react-router-dom";

const CreateEvent = () => {
    const navigate = useNavigate();

    const [event, setEvent] = useState({
        name: "",
        description: "",
        img: "",
        price: "",
        nbTickets: "",
        nbParticipants: "",
        like: false,
    });

    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEvent({
            ...event,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await addEvent({
                ...event,
                price: Number(event.price),
                nbTickets: Number(event.nbTickets),
                nbParticipants: Number(event.nbParticipants),
                like: false,
            });

            setSuccess(true);

            navigate("/events");

        } catch (error) {
            console.error("Error adding event:", error);
        }
    };

    return (
        <Container className="mt-4">
            <h2>Create Event</h2>

            <Alert show={success} variant="success">
                Event created successfully!
            </Alert>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={event.name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="description"
                        value={event.description}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        type="text"
                        name="img"
                        value={event.img}
                        onChange={handleChange}
                        placeholder="event1.jpg"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="number"
                        name="price"
                        value={event.price}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Number of Tickets</Form.Label>
                    <Form.Control
                        type="number"
                        name="nbTickets"
                        value={event.nbTickets}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                 <Form.Group className="mb-3">
                    <Form.Label>Number of Participant</Form.Label>
                    <Form.Control
                        type="number"
                        name="nbParticipants"
                        value={event.nbParticipants}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Create Event
                </Button>
            </Form>
        </Container>
    );
};

export default CreateEvent;