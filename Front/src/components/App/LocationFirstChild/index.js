// == Import npm
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'src/api';
import axiosAPI from 'axios';
import classNames from 'classnames';

// == Import
import './styles.scss';
import {
  AiOutlineDelete, AiOutlineDown, AiOutlineEdit, AiOutlineClose,
} from 'react-icons/ai';
import LocationSecondChild from '../LocationSecondChild';
// == Composant
const LocationFirstChild = ({ id, label }) => {
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

  const [childrenShown, setChildrenShown] = useState(false);

  const showChildren = () => {
    if (childrenShown) {
      setChildrenShown(false);
    }
    else {
      setChildrenShown(true);
    }
  };

  return (
    <div className="location">
      <div className="location-parent">
        <button type="button" className="btn" onClick={showChildren}> <AiOutlineDown className={classNames('icon blue arrow-right', { 'icon blue arrow-down': childrenShown })} /></button>
        <h2 className="location-title">{label}</h2>
        <AiOutlineEdit className="icon blue" />
        <AiOutlineDelete className="icon red" />
        <AiOutlineClose className="icon green" />
      </div>
      {childrenShown && (
        locationChildren.map((locationChild) => (
          <LocationSecondChild key={locationChild.id} {...locationChild} />))
      )}
    </div>
  );
};

LocationFirstChild.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

// == Export
export default LocationFirstChild;
