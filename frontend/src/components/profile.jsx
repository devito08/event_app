// import React from 'react';

// const profile = () => {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
//         <div className="sm:flex sm:items-center px-6 py-4">
//           <img
//             className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-24 w-24 rounded-full"
//             src="https://via.placeholder.com/150"
//             alt="User Avatar"
//           />
//           <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
//             <h1 className="text-xl font-semibold text-gray-800">John Doe</h1>
//             <p className="text-sm font-normal text-gray-600">Web Developer</p>
//             <p className="text-sm font-normal text-gray-600">New York, USA</p>
//             <div className="mt-4">
//               <a href="edit" className="text-indigo-600 hover:text-indigo-800">Edit Profile</a>
//             </div>
//           </div>
//         </div>
//         <div className="border-t border-gray-200 px-6 py-4">
//           <h2 className="text-lg font-semibold text-gray-800">About Me</h2>
//           <p className="text-sm text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
//         </div>
//         <div className="border-t border-gray-200 px-6 py-4">
//           <h2 className="text-lg font-semibold text-gray-800">Contact Information</h2>
//           <ul className="text-sm text-gray-600 mt-2">
//             <li>Email: john.doe@example.com</li>
//             <li>Phone: +1 (123) 456-7890</li>
//             <li>Website: <a href="https://example.com" className="text-indigo-600 hover:text-indigo-800">example.com</a></li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default profile;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token'); // Retrieve token from local storage

    if (token) {
      axios.get('/api/profile', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        setUser(response.data); // Store user details in state
      })
      .catch(error => {
        console.error('Error fetching user profile:', error);
      });
    }
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Welcome, {user.firstName} {user.lastName}</h2>
      <p>Email: {user.email}</p>
      <p>Phone Number: {user.phoneNumber}</p>
      {/* Add more user details as needed */}
    </div>
  );
};

export default Profile;
