import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import Events from './components/Events';
import Home from './components/Home';
import NavBar from './components/NavBar';
import EventDetails from './components/EventDetails';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App(props) {

  return (
    <>
      {/* <Events /> */}
     


      <BrowserRouter>
           <NavBar />

        <Routes>
          <Route path="/" element={<Home />}   />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:name" element={<EventDetails />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
