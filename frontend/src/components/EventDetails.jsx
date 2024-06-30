import React from 'react';
import { useParams, Link } from 'react-router-dom';

const EventDetails = ({ events }) => {
  const { eventId } = useParams();
  const event = events.find(event => event.id === parseInt(eventId));

  if (!event) {
    return <div className="text-center text-red-500 mt-10">Event not found</div>;
  }

  return (
    <div className="flex justify-center mt-10 px-4">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg overflow-hidden flex">
        <img src={event.image} alt={event.title} className="w-1/2 h-auto object-cover" />
        <div className="p-6 w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{event.title}</h2>
          <p className="text-gray-600 text-lg mb-2">Date: {event.date}</p>
          <p className="text-gray-600 text-lg mb-2">Category: {event.category}</p>
          <p className="text-gray-600 text-lg mb-2">Price: {event.price}</p>
          <p className="text-gray-600 text-lg mb-2">Total Slots: {event.totalSlots}</p>
          <p className="text-gray-600 text-lg mb-2">Location URL: <a href={event.locationUrl} target="_blank" rel="noopener noreferrer">{event.locationUrl}</a></p>
          <p className="text-gray-600 text-lg mb-2">Timing: {event.timing}</p>
          <p className="text-gray-600 text-lg mb-2">Organizer: {event.organizer}</p>
          {event.contactNumber && (
            <p className="text-gray-600 text-lg mb-4">Contact Number: {event.contactNumber}</p>
          )}
          <Link to={'/booking'}>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md">Book</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
