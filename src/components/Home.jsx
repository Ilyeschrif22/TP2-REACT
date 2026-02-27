import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();


    const navigateToEvents = () => {
        navigate("/events");
    }


    return (
        <>
            <h1>Welcome to the Event Booking App</h1>
            <p>Explore and book your favorite events!</p>

            <button className="btn btn-primary" onClick={navigateToEvents}>
                View Events
            </button>
        </>
    );
};

export default Home;