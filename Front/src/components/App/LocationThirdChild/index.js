// == Import npm
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'src/api';
import axiosAPI from 'axios';

// == Import
import './styles.scss';
import {
  AiOutlineDelete, AiOutlineEdit, AiOutlineClose,
} from 'react-icons/ai';
// == Composant
const LocationThirdChild = ({ id, label }) => {
  const [locationChildren, setLocationChildren] = useState([]);
  (useEffect(() => {
    const source = axiosAPI.CancelToken.source();
    axios.get(`/localites/${id}`, source).then((result) => {
      if (result && result.data) {
        setLocationChildren(result.data.location);
      }
    }).catch((error) => {
      console.log('error', error);
    });
  }, []));
  return (
    <div className="location">
      <div className="location-parent">
        <h2 className="location-title">{label}</h2>
        <AiOutlineEdit className="icon blue" />
        <AiOutlineDelete className="icon red" />
        <AiOutlineClose className="icon green" />
      </div>
      {locationChildren.map((locationChild) => (
        <h2 key={locationChild.id} className="location-title">{locationChild.label}</h2>
      ))}
    </div>
  );
};

LocationThirdChild.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

// == Export
export default LocationThirdChild;
