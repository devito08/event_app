import React from 'react';

const EventList = ({ events }) => {
  return (
    <div className="events-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {events.map((event, index) => (
        <div key={index} className="event-card bg-white shadow-md rounded-lg overflow-hidden w-80 ml-32">
          <img src={event.image} alt={event.title} className="w-80 h-48 object-cover"/>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
            <p className="text-gray-600">{event.date}</p>
            <p className="text-gray-600">Category: {event.category}</p>
            <p className="text-gray-600">Price: {event.price}</p>
            <p className="text-gray-600">Organizer: {event.organizer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventList;
