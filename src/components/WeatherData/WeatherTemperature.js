import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {CLOUD,CLOUDY,SUN,RAIN,SNOW,WINDY} from './../../constants/weathers';
import './style.css';

const stateToIconName = weatherState => {
    switch (weatherState) {
        case CLOUD:
            return 'cloud';
            break;
        case CLOUDY:
            return 'cloudy';
            break;
        case SUN:
            return 'day-sunny';
            break;
        case RAIN:
            return 'rain';
            break;
        case SNOW:
            return 'snow';
            break;
        case WINDY:
            return 'windy';
            break;
        default:
            return 'day-sunny';
            break;
    }
};

const getWeatherIcon = weatherState =>{
    return (<WeatherIcons className='wicon' name={stateToIconName(weatherState)} size='3x' />);
};

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className='weatherTemperatureCont'>
        {getWeatherIcon(weatherState)}
        <span className='temperature'>{`${temperature}`}</span>
        <span className='temperatureType'>C°</span>
    </div>
);

WeatherTemperature.protoTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;