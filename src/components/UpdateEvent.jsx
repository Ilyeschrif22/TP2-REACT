import { useState, useEffect } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { editEvent, getEventById } from "../service/api";
import { useNavigate, useParams } from "react-router-dom";

const UpdateEvent = () => {
    const navigate = useNavigate();
    const { id } = useParams();

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

    useEffect(() => {
        const fetchEventById = async () => {
            try {
                const response = await getEventById(id);

                console.log("Fetched event:", response);
                setEvent(response);

            } catch (error) {
                console.error("Event does not exist", error);
            }
        };

        fetchEventById(); 
    }, [id]);

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
            await editEvent(id, {
                ...event,
                price: Number(event.price),
                nbTickets: Number(event.nbTickets),
                nbParticipants: Number(event.nbParticipants),
            });

            setSuccess(true);

            navigate("/events");

        } catch (error) {
            console.error("Error updating event:", error);
        }
    };

    return (
        <Container className="mt-4">
            <h2>Update Event</h2>

            <Alert show={success} variant="success">
                Event updated successfully!
            </Alert>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
value={event?.name || ""}
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
                            value={event?.description || ""}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        type="text"
                        name="img"
                            value={event?.img || "" }
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="number"
                        name="price"
                        value={event?.price || ""}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Number of Tickets</Form.Label>
                    <Form.Control
                        type="number"
                        name="nbTickets"
                        value={event?.nbTickets || ""}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Number of Participants</Form.Label>
                    <Form.Control
                        type="number"
                        name="nbParticipants"
                        value={event?.nbParticipants || ""}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Update Event
                </Button>
            </Form>
        </Container>
    );
};

export default UpdateEvent;