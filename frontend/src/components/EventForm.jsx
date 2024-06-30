import React, { useState } from 'react';

const EventForm = ({ addEvent }) => {
  const [event, setEvent] = useState({
    title: '',
    date: '',
    category: '',
    price: '',
    image: null,
    organizer: '',
    totalSlots: '',
    locationUrl: '',
    timing: '',
    contactNumber: '' // New field for contact number
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setEvent({ ...event, image: files[0] });
    } else {
      setEvent({ ...event, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', event.title);
    formData.append('date', event.date);
    formData.append('category', event.category);
    formData.append('price', event.price);
    formData.append('image', event.image);
    formData.append('organizer', event.organizer);
    formData.append('totalSlots', event.totalSlots);
    formData.append('locationUrl', event.locationUrl);
    formData.append('timing', event.timing);
    formData.append('contactNumber', event.contactNumber); // Append contactNumber

    addEvent(formData); // Pass FormData object to addEvent function
    setEvent({
      title: '',
      date: '',
      category: '',
      price: '',
      image: null,
      organizer: '',
      totalSlots: '',
      locationUrl: '',
      timing: '',
      contactNumber: '' // Reset fields after submission
    });
  };

  return (
    <div className='mx-auto justify-center items-center max-w-xl'>
      <div>
        <h1 className='max-w-xl justify-center items-center mt-10 text-5xl'>
          Do You Love The Smell of Events Every Morning?
        </h1>
        <h5 className='text-xl'>
          We're Totally Obsessed To Make Your Event Succeed!
        </h5>
      </div>
      <form
        onSubmit={handleSubmit}
        className='max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg mt-12'
      >
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='title'
          >
            Title
          </label>
          <input
            type='text'
            name='title'
            value={event.title}
            onChange={handleChange}
            placeholder='Title'
            required
            className='w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600'
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='date'
          >
            Date
          </label>
          <input
            type='date'
            name='date'
            value={event.date}
            onChange={handleChange}
            placeholder='Date'
            required
            className='w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600'
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='category'
          >
            Category
          </label>
          <select
            name='category'
            value={event.category}
            onChange={handleChange}
            required
            className='w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600'
          >
            <option value=''>Category</option>
            <option value='Hackathons'>Hackathons</option>
            <option value='Workshops'>Workshops</option>
            <option value='Cultural Events'>Cultural Events</option>
            <option value='Conferences'>Conferences</option>
          </select>
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='price'
          >
            Price
          </label>
          <input
            type='text'
            name='price'
            value={event.price}
            onChange={handleChange}
            placeholder='Price'
            required
            className='w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600'
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='image'
          >
            Image
          </label>
          <input
            type='file'
            name='image'
            onChange={handleChange}
            required
            accept='image/*'
            className='w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600'
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='totalSlots'
          >
            Total Slots
          </label>
          <input
            type='number'
            name='totalSlots'
            value={event.totalSlots}
            onChange={handleChange}
            placeholder='Total Slots'
            required
            className='w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600'
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='locationUrl'
          >
            Location URL
          </label>
          <input
            type='text'
            name='locationUrl'
            value={event.locationUrl}
            onChange={handleChange}
            placeholder='Location URL'
            required
            className='w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600'
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='timing'
          >
            Timing
          </label>
          <input
            type='text'
            name='timing'
            value={event.timing}
            onChange={handleChange}
            placeholder='Timing'
            required
            className='w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600'
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='organizer'
          >
            Organizer
          </label>
          <input
            type='text'
            name='organizer'
            value={event.organizer}
            onChange={handleChange}
            placeholder='Organizer'
            required
            className='w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600'
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='contactNumber'
          >
            Contact Number
          </label>
          <input
            type='text'
            name='contactNumber'
            value={event.contactNumber}
            onChange={handleChange}
            placeholder='Contact Number'
            className='w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600'
          />
        </div>
        <button
          type='submit'
          className='w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600'
        >
          Add Event
        </button>
      </form>
    </div>
  );
};

export default EventForm;
