import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './../WeatherData';
import './styles.css';
import transformWeather from './../../services/transformWeather';
import CircularProgress from 'material-ui/CircularProgress';

//http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=15765c066c3e40417ac717c38f06ee9b
const location = "Mexico, mx";
const api_key = "15765c066c3e40417ac717c38f06ee9b";
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;


class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'México',
            data: null
        };
        
        
    }

    handleUpdateClick = () => {
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

    
    componentWillMount() {
        this.handleUpdateClick();
        
    }
    

    render = () => {
        
        const { city, data } = this.state;
        return (
            <div className='weatherLocationCont' >
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
export default WeatherLocation;
