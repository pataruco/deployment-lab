import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
            cca3: isoCode,
          } = country;

          return (
            <li key={common}>
              <Link to={`/country/${isoCode}`}>
                <h3>{common}</h3>
                <picture>
                  <img src={svg} alt={common} />
                </picture>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CountryList;
