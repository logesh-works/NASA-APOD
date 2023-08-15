import React, { useState, useEffect } from 'react';
import './Apod.css'

const Apod = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from your API endpoint
    fetch('https://api.nasa.gov/planetary/apod?api_key=j43WYICbOK4l8XXbibeOtnNnV0iErQ3gSnAYL1b7')  // Replace with your API URL
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
   const td = new Date()
  return (
    <div className="Apod-container">
      <h1>{`Astronomy Picture of the Day `}</h1>
      <h1>{`Date: ${td.toLocaleDateString()}`}</h1>
      {data ? (
        <div className="data-details">
          <h1>{data.title}</h1>
          <img src={data.hdurl} alt='Today Pic' />
          <p>Description: {data.explanation}</p>
          {/* Display other data details */}
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Apod;
