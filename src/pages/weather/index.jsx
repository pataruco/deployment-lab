import './index.css';

import { useState } from 'react';

import Page from '../../components/page';
import { fetchWeatherByCity } from '../../services/fetch-weather-by-city';

const WeatherCondition = ({ name, icon, temp, description }) => {
  return (
    <div>
      <h2>{name}</h2>
      <picture>
        <img
          src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
          alt={description}
        />
      </picture>
      <p>
        <span>{temp} &deg;</span>
      </p>
      <p>{description}</p>
    </div>
  );
};

const Weather = () => {
  const [city, setCity] = useState('');
  const [requestStatus, setRequestStatus] = useState();

  const [{ temp, description, icon, name }, setWeather] = useState({
    temp: '',
    description: '',
    icon: '',
    name: '',
  });

  const handleOnChange = (event) => {
    const {
      target: { value },
    } = event;
    setCity(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setRequestStatus('idle');
    try {
      const { temp, description, icon, name } = await fetchWeatherByCity(city);
      setWeather({ temp, description, icon, name });
      setRequestStatus('success');
    } catch (error) {
      setRequestStatus('error');
    }
  };

  return (
    <Page className="weather">
      <h1>Check the weather</h1>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="city">What is the weather?</label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="Search for a city"
          value={city}
          onChange={handleOnChange}
        />
        <button type="submit">Search</button>
      </form>
      <section className="status">
        {requestStatus && requestStatus === 'idle' && <p>Loading ...</p>}
        {requestStatus && requestStatus === 'error' && (
          <p>Something went wrong 🙃</p>
        )}
        {requestStatus && requestStatus === 'success' && (
          <WeatherCondition
            temp={temp}
            icon={icon}
            description={description}
            name={name}
          />
        )}
      </section>
    </Page>
  );
};

export default Weather;
