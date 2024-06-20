import './index.css';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Page from '../../components/page/index';
import { fetchAllCountries } from '../../services/fetch-all-countries';

const CountriesPage = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchAllCountries().then((data) => {
      setCountries(data);
    });
  }, []);

  return (
    <Page className="countries">
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
                <picture>
                  <img src={svg} alt={common} />
                </picture>
                <h3>{common}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </Page>
  );
};

export default CountriesPage;
