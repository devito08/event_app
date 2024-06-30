import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingForm = () => {

  const handleButtonClick = () => {
    toast.success('Payment Success the details will be sent throught the mail!');
    
  };
  
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventCategory, setEventCategory] = useState('');
  const [transactionId, setTransactionId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({
      eventName,
      eventDate,
      eventCategory,
      transactionId,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-8 bg-gray-100 rounded-lg shadow-lg">
      <div className="mb-4">
        <label htmlFor="eventName" className="block text-gray-700 font-bold mb-2">Event Name:</label>
        <input
          type="text"
          id="eventName"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          required
          className="w-full px-3 py-2 placeholder-gray-300 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="eventDate" className="block text-gray-700 font-bold mb-2">Event Date:</label>
        <input
          type="date"
          id="eventDate"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          required
          className="w-full px-3 py-2 placeholder-gray-300 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="eventCategory" className="block text-gray-700 font-bold mb-2">Event Category:</label>
        <select
          id="eventCategory"
          value={eventCategory}
          onChange={(e) => setEventCategory(e.target.value)}
          required
          className="w-full px-3 py-2 placeholder-gray-300 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        >
          <option value="">Select Category</option>
          <option value="hackathon">Hackathon</option>
          <option value="conference">Conference</option>
          <option value="cultural">Cultural Event</option>
          <option value="workshop">Workshop</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="transactionId" className="block text-gray-700 font-bold mb-2">Payment Transaction ID:</label>
        <input
          type="text"
          id="transactionId"
          value={transactionId}
          onChange={(e) => setTransactionId(e.target.value)}
          required
          className="w-full px-3 py-2 placeholder-gray-300 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Scan QR Code to Pay:</label>
        <img src="/images/Gpay.png" alt="QR Code" className="w-full rounded-lg" />
      </div>
      <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
       onClick={handleButtonClick}
      >
        Submit
      </button>
    </form>
  );
};

export default BookingForm;
