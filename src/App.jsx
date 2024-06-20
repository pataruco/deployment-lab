/*
- When the user submit the form, I want to take the value of the input city.
- Then, I want to go to a public API, fetch the realtime weather data from the city
- Render in the page
*/

import { useState } from 'react';
import CountryList from './components/CountryList';
import { fetchWeatherByCity } from './services/fetch-weather-by-city';

function App() {
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
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">weather</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
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
        <CountryList />
      </main>
    </>
  );
}

export default App;
