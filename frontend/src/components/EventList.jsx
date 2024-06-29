// import React from 'react';

// const categorizeEvents = (events) => {
//   return events.reduce((categories, event) => {
//     if (!categories[event.category]) {
//       categories[event.category] = [];
//     }
//     categories[event.category].push(event);
//     return categories;
//   }, {});
// };

// const EventList = ({ events }) => {
//   const categorizedEvents = categorizeEvents(events);

//   return (
//     <div className="events-container justify-center items-center mr-1 mt-10">
//       {Object.keys(categorizedEvents).map((category) => (
//         <div key={category} className="category-section mb-10">
//           <h2 className="text-4xl font-semibold text-gray-800 mb-6 lg:px-20 mx-12  ">{category}</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {categorizedEvents[category].map((event, index) => (
//               <div key={index} className="event-card bg-white shadow-md rounded-lg overflow-hidden w-80 ml-32">
//                 <img src={event.image} alt={event.title} className="w-80 h-48 object-cover"/>
//                 <div className="p-4">
//                   <h3 className="text-2xl font-semibold text-gray-800">{event.title}</h3>
//                   <p className="text-gray-900 text-lg">{event.date}</p>
//                   <p className="text-gray-900 text-lg">Category: {event.category}</p>
//                   <p className="text-gray-900 text-lg">Price: {event.price}</p>
//                   <p className="text-gray-900 text-lg">Organizer: {event.organizer}</p>
                  
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default EventList;


// EventList.js

import React from 'react';
import { Link } from 'react-router-dom';

const categorizeEvents = (events) => {
  return events.reduce((categories, event) => {
    if (!categories[event.category]) {
      categories[event.category] = [];
    }
    categories[event.category].push(event);
    return categories;
  }, {});
};

const EventList = ({ events }) => {
  const categorizedEvents = categorizeEvents(events);

  return (
    <div className="events-container justify-center items-center mr-1 mt-10">
      {Object.keys(categorizedEvents).map((category) => (
        <div key={category} className="category-section mb-10">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6 lg:px-20 mx-12">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categorizedEvents[category].map((event, index) => (
              <div key={index} className="event-card bg-white shadow-md rounded-lg overflow-hidden w-80 ml-32">
                <Link to={`/event/${event.id}`} className="block">
                  <img src={event.image} alt={event.title} className="w-80 h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-2xl font-semibold text-gray-800">{event.title}</h3>
                    <p className="text-gray-900 text-lg">{event.date}</p>
                    <p className="text-gray-900 text-lg">Category: {event.category}</p>
                    <p className="text-gray-900 text-lg">Price: {event.price}</p>
                    <p className="text-gray-900 text-lg">Organizer: {event.organizer}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventList;

