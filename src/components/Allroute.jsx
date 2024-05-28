import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Create from "./create";  // Ensure the file name matches
import Profile from "./profile";  // Ensure the file name matches
import EventForm from "./EventForm";
import EventList from "./EventList";

const Allroute = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from backend when component mounts
    fetch('http://localhost:5000/api/events')
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
    // Send a POST request to add the new event to the backend
    fetch('http://localhost:5000/api/events', {  // Ensure the URL is correct
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newEvent)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to add event');
        }
        return response.json();
      })
      .then(addedEvent => {
        // Update the events state with the new event
        setEvents([...events, addedEvent]);
      })
      .catch(error => console.error('Error adding event:', error));
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/profile" element={<Profile />} />
      <Route 
        path="/event-form" 
        element={<EventForm addEvent={addEvent} />} // Pass addEvent function as prop
      />
      <Route 
        path="/event-listing" 
        element={<EventList events={events} />} // Pass events data as prop
      />
    </Routes>
  );
}

export default Allroute;
