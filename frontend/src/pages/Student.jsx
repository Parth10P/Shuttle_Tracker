// import React, { useEffect, useState } from 'react';
// import BusCard from '../components/BusCard';
// import { useNavigate } from 'react-router-dom';

// function Student({ setUserType }) {
//   const [dateTime, setDateTime] = useState(new Date());
//   const [busInfo, setBusInfo] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setDateTime(new Date());
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     setLoading(true);
//     fetch('/api/buses')
//       .then((res) => {
//         if (!res.ok) throw new Error('Failed to fetch bus info');
//         return res.json();
//       })
//       .then((data) => {
//         setBusInfo(data && data.length > 0 ? data[0] : null);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   const handleLogout = () => {
//     if (setUserType) setUserType(null);
//     navigate('/');
//   };

//   return (
//     <div className="px-4 py-6 sm:p-8 max-w-3xl mx-auto">
//       <div className="text-sm sm:text-base text-center font-bold text-gray-600 dark:text-gray-300 mb-4">
//         {dateTime.toLocaleString()}
//       </div>
//       <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center mb-4">
//         Student Dashboard
//       </h1>
//       <div className="flex justify-center mb-4">
//         <button
//           onClick={handleLogout}
//           className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
//         >
//           Logout
//         </button>
//       </div>
//       {loading ? (
//         <div className="text-center text-lg text-gray-500 dark:text-gray-400">
//           Loading bus info...
//         </div>
//       ) : error ? (
//         <div className="text-center text-red-500 font-semibold">{error}</div>
//       ) : (
//         <BusCard
//           driverName={busInfo?.driverName}
//           busNo={busInfo?.busNumber}
//           location={busInfo?.currentLocation}
//         />
//       )}
//     </div>
//   );
// }

// export default Student;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import TrackShuttle from './TrackShuttle';

function Student({ setUserType }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (setUserType) setUserType(null);
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Logout Button */}
      <div className="flex justify-end p-4 bg-white dark:bg-gray-900 shadow-md">
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          Logout
        </button>
      </div>

      {/* Track Shuttle Component */}
      <div className="flex-1">
        <TrackShuttle />
      </div>
    </div>
  );
}

export default Student;

