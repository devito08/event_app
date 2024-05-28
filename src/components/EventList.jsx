import React from 'react';

const EventList = ({ events }) => {
  return (
    <div className="events-container">
      {events.map((events, index) => (
        <div key={index} className="event-card">
          <img src={events.image} alt={events.title} />
          <h3>{events.title}</h3>
          <p>{events.date}</p>
          <p>Category: {events.category}</p>
          <p>Price: {events.price}</p>
          <p>Organizer: {events.organizer}</p>
        </div>
      ))}
    </div>
  );
};

export default EventList;
