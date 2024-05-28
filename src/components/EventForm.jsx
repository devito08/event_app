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
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={event.title} onChange={handleChange} placeholder="Title" required />
      <input type="text" name="date" value={event.date} onChange={handleChange} placeholder="Date" required />
      <select name="category" value={event.category} onChange={handleChange} required>
        <option value="">Category</option>
        <option value="AI">AI</option>
        <option value="Development">Development</option>
      </select>
      <input type="text" name="price" value={event.price} onChange={handleChange} placeholder="Price" required />
      <input type="text" name="image" value={event.image} onChange={handleChange} placeholder="Image URL" required />
      <input type="text" name="organizer" value={event.organizer} onChange={handleChange} placeholder="Organizer" required />
      <button type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;
