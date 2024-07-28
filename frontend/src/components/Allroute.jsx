import React, { useState, useEffect } from "react";
import {Route, Routes,useNavigate } from 'react-router-dom'; // Assuming you are using react-router-dom for routing

import Home from "./Home";
import Create from "./create";  
import Profile from "./profile";  
import EventForm from "./EventForm";
import EventList from "./EventList";
import Login from "./Login";
import Register from "./Register"; 
import EventDetails from "./EventDetails";
import BookingForm from "./BookingForm";

const RegisterWrapper=()=>{
  const navigate = useNavigate();

  const handleregSuccess = ()=>{
    navigate('/login');
  };
  return <Register onRegisterSuccess = {handleregSuccess} />;

}
 

const LoginWrapper = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate('/home'); 
  };

  return <Login onLoginSuccess={handleLoginSuccess} />;
};

const Allroute = () => {
  
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from backend when component mounts
    fetch('https://event-app-yha0.onrender.com/api/events')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        return response.json();
      })
      .then(data => setEvents(data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);


  const addEvent = (newEvent) => {
    fetch('https://event-app-yha0.onrender.com/api/events', {
      method: 'POST',
      body: newEvent 
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to add event');
        }
        return response.json();
      })
      .then(addedEvent => {
        setEvents([...events, addedEvent]);
      })
      .catch(error => console.error('Error adding event:', error));
  };
  

  return (
    <Routes>
      <Route path="/" element={<LoginWrapper events={events} />} />
      <Route path="/login" element={<LoginWrapper />} />

      <Route path="/create" element={<Create />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/create-event" element={<EventForm addEvent={addEvent} />} />
      <Route path="/event-listing" element={<EventList events={events} />} />
      <Route path="/event/:eventId" element={<EventDetails events={events} />} />
      
      <Route path="/booking/:eventId" exact component={() => <BookingForm events={events} />} />

      <Route path="/home" element={<Home events={events} />} /> 
      <Route path="/register" element={<RegisterWrapper />} />

      {/* <Route path="/register" element={<Register />} /> */}
      <Route path="/booking" element={<BookingForm/>}/>
      
    </Routes>
  );
}

export default Allroute;

