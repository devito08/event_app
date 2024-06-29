import React, { useState } from 'react';

const EventForm = ({ addEvent }) => {
  const [event, setEvent] = useState({
    title: '',
    date: '',
    category: '',
    price: '',
    image: '',
    organizer: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent(event);
    setEvent({
      title: '',
      date: '',
      category: '',
      price: '',
      image: '',
      organizer: ''
    });
  };

  return (
    <div className='mx-auto justify-center items-center max-w-xl'>
      <div className=''>
        <h1 className='max-w-xl justify-center items-center  mt-10 text-5xl'>Do You Love The Smell of Events Every Morning?</h1>
        <h5 className='text-xl '>We're Totally Obsessed To Make Your Event Succeed!</h5>

      </div>
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg mt-12">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={event.title}
          onChange={handleChange}
          placeholder="Title"
          required
          className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          value={event.date}
          onChange={handleChange}
          placeholder="Date"
          required
          className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">Category</label>
        <select
          name="category"
          value={event.category}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        >
          <option value="">Category</option>
          <option value="Hackathons">Hackathons</option>
          <option value="Workshops">Workshops</option>
          <option value="Cultural Events">Cultural Events</option>
          <option value="Conferences">Conferences</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">Price</label>
        <input
          type="text"
          name="price"
          value={event.price}
          onChange={handleChange}
          placeholder="Price"
          required
          className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">Image URL</label>
        <input
          type="text"
          name="image"
          value={event.image}
          onChange={handleChange}
          placeholder="Image URL"
          required
          className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="organizer">Organizer</label>
        <input
          type="text"
          name="organizer"
          value={event.organizer}
          onChange={handleChange}
          placeholder="Organizer"
          required
          className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
      >
        Add Event
      </button>
    </form>
  
    </div>
  );
};

export default EventForm;
