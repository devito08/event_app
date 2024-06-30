// EventDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetails = ({ events }) => {
  const { eventId } = useParams();
  const event = events.find(event => event.id === parseInt(eventId));

  if (!event) {
    return <div className="text-center text-red-500 mt-10">Event not found</div>;
  }

  return (
    <div className="flex justify-center mt-10 px-4">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg overflow-hidden flex">
        <img src={event.image} alt={event.title} className="w-1/2 h-auto object-cover"/>
        <div className="p-6 w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{event.title}</h2>
          <p className="text-gray-600 text-lg mb-2">Date: {event.date}</p>
          <p className="text-gray-600 text-lg mb-2">Category: {event.category}</p>
          <p className="text-gray-600 text-lg mb-2">Price: {event.price}</p>
          <p className="text-gray-600 text-lg mb-4">Organizer: {event.organizer}</p>
          <button>Book</button>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
