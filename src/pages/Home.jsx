import { useState } from 'react';

import Page from '../components/page';
import { fetchWeatherByCity } from '../services/fetch-weather-by-city';

const Home = () => {
  const [city, setCity] = useState('');
  const [{ tempState, descriptionState }, setWeather] = useState({
    tempState: '',
    descriptionState: '',
  });

  const handleOnChange = (event) => {
    const {
      target: { value },
    } = event;
    setCity(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { temp, description } = await fetchWeatherByCity(city);

    setWeather({
      tempState: temp,
      descriptionState: description,
    });
  };

  return (
    <Page>
      <h1>Check the weather</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="city">Check the weather</label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="Search for a city"
          value={city}
          onChange={handleOnChange}
        />
        <button type="submit">Search</button>
        <h2>{city}</h2>
        <dl>
          <dt>Temperature:</dt>
          <dd>
            <span>{tempState}</span> {tempState ? <>&deg;</> : ''}
          </dd>
          <dt>Conditions</dt>
          <dd>{descriptionState}</dd>
        </dl>
      </form>
    </Page>
  );
};

export default Home;
