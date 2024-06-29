// EventDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetails = ({ events }) => {
  const { eventId } = useParams();
  const event = events.find(event => event.id === parseInt(eventId));

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="event-details">
      <h2>{event.title}</h2>
      <p>Date: {event.date}</p>
      <p>Category: {event.category}</p>
      <p>Price: {event.price}</p>
      <p>Organizer: {event.organizer}</p>
      <img src={event.image} alt={event.title} />
    </div>
  );
};

export default EventDetails;
