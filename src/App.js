import React from "react";
// import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Allroute from "./components/Allroute";
import NavBar from "./components/Navbar";
// import EventForm from "./components/EventForm";
// import EventList from "./components/EventList";

const App = () => {
  // const [events, setEvents] = useState([]);

  // useEffect(() => {
  //   // Fetch events when the component mounts
  //   fetch('/api/events')
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch events');
  //       }
  //       return response.json();
  //     })
  //     .then(data => setEvents(data))
  //     .catch(error => console.error('Error fetching events:', error));
  // }, []);

  // const addEvent = (event) => {
  //   // Send a POST request to add a new event
  //   fetch('/api/events', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(event)
  //   })
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Failed to add event');
  //       }
  //       return response.json();
  //     })
  //     .then(newEvent => setEvents([...events, newEvent]))
  //     .catch(error => console.error('Error adding event:', error));
  // };

  
  // const [events, setEvents] = useState([]);

  // useEffect(() => {
  //   fetch('/api/events')
  //     .then(response => response.json())
  //     .then(data => setEvents(data))
  //     .catch(error => console.error('Error fetching events:', error));
  // }, []);

  // const addEvent = (event) => {
  //   fetch('/api/events', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(event)
  //   })
  //     .then(response => response.json())
  //     .then(newEvent => setEvents([...events, newEvent]))
  //     .catch(error => console.error('Error adding event:', error));
  // };

  return (
    <Router>
      <NavBar />
      <Allroute />
      {/* <EventForm addEvent={addEvent} />
      <EventList events={events} /> */}
    </Router>
  );
}

export default App;
