import { useEffect, useState } from 'react';
import { fetchAllCountries } from '../services/fetch-all-countries';

const CountryList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchAllCountries().then((data) => {
      setCountries(data);
    });
  }, []);

  return (
    <>
      <h2>Countries in the world</h2>
      <ul>
        {countries.map((country) => {
          const {
            name: { common },
            flags: { svg },
          } = country;

          return (
            <li key={common}>
              <h3>{common}</h3>
              <picture>
                <img src={svg} alt={common} />
              </picture>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CountryList;
