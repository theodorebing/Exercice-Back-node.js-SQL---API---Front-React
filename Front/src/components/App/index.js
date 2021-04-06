// == Import npm
import React, { useEffect, useState } from 'react';
import axios from 'src/api';
import axiosAPI from 'axios';

// == Import
import './styles.scss';
import Location from './Location';

// == Composant
const App = () => {
  const [locations, setLocations] = useState([]);
  (useEffect(() => {
    const source = axiosAPI.CancelToken.source();
    axios.get('/localites', source).then((result) => {
      if (result && result.data) {
        setLocations(result.data.locations);
      }
    }).catch((error) => {
      console.log('error', error);
    });
  }, []));
  // console.log('locations', locations);
  // const { parentid } = locations.parentid;
  return (
    <div className="app">
      <h1 className="app-title">Locations</h1>
      {locations.map((location) => (
        <Location key={location.id} {...location} />
      ))}
    </div>
  );
};

// == Export
export default App;
