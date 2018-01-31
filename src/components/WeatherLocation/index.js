import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './../WeatherData';
import './styles.css';
import transformWeather from './../../services/transformWeather';
import CircularProgress from 'material-ui/CircularProgress';

//http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=15765c066c3e40417ac717c38f06ee9b
const api_key = "15765c066c3e40417ac717c38f06ee9b";
const url = `http://api.openweathermap.org/data/2.5/weather`;


class WeatherLocation extends Component {

    constructor({city}) {
        super();
        this.state = {
            city,
            data: null
        };
    }

    componentWillMount() {
        const {city} = this.state;
        const api_weather = `${url}?q=${city}&appid=${api_key}`;
        fetch(api_weather).then(data => {
            return data.json();
        }).then(weather_data => {
            const data = transformWeather(weather_data);
            this.setState({ data });
            //console.log(weather_data);
        });
        /* this.setState({
            data: data2
        }); */
    }
    

    render = () => {
        const { onWeatherLocationClick } = this.props;
        const { city, data } = this.state;
        return (
            <div className='weatherLocationCont' onClick={onWeatherLocationClick} >
                <Location city={city} />
               {data ? <WeatherData data={data} /> : 
               <CircularProgress size={60} thickness={7} /> }
            </div>);
    };
}

/* const WeatherLocation = () => (
    <div className='weatherLocationCont' >
        <Location city={'México'} />
        <WeatherData data={data}/>
    </div>
); */

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func
}

export default WeatherLocation;
