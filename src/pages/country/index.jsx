import './index.css';

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Page from '../../components/page';
import { fetchCountryByIsoCode } from '../../services/fetch-country-by-iso-code';

const Country = () => {
  const { isoCode } = useParams();
  const navigate = useNavigate();

  const [country, setCountry] = useState();
  const [requestStatus, setRequestStatus] = useState('idle');

  useEffect(() => {
    fetchCountryByIsoCode(isoCode)
      .then((data) => {
        console.log({ data });
        setCountry(data);
        setRequestStatus('success');
      })
      .catch(() => {
        // navigate('/error');
        setRequestStatus('error');
      });
  }, [isoCode]);

  return (
    <Page className="country">
      {requestStatus === 'idle' && <p>Loading ...</p>}
      {requestStatus === 'error' && (
        <p>
          Something went wrong <span img="role">🙃</span> ...
        </p>
      )}
      {requestStatus === 'success' && (
        <>
          <h1>{country.name.common}</h1>
          <div>
            <h2>Flag</h2>
            <picture>
              <img
                src={country.flags.svg}
                alt={country.flags.alt}
                loading="lazy"
              />
            </picture>
            <h2>Coat of arms</h2>
            <picture>
              <img
                src={country.coatOfArms.svg}
                alt={`coat of arms of ${country.name.commo}`}
                loading="lazy"
              />
            </picture>
          </div>
          <h2>Capital</h2>
          <p>{country.capital[0]}</p>
          <h2>Population</h2>
          <p>{new Intl.NumberFormat('en-GB').format(country.population)}</p>
        </>
      )}
    </Page>
  );
};

export default Country;
