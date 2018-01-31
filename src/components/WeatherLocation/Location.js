import React from "react";
import PropTypes from 'prop-types';
import './styles.css';

const Location = ({city}) => (  //Destructuring
    /* const {city} = props; //Destructuring */
 <div className='LocationCont' >
     <h2> {city} </h2>
 </div> 
);

Location.propTypes = {
    city: PropTypes.string.isRequired,
};

export default Location;