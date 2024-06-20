import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Page from '../components/page';
import { fetchCountryByIsoCode } from '../services/fetch-country-by-iso-code';

const Country = () => {
  const { isoCode } = useParams();
  const navigate = useNavigate();

  const [country, setCountry] = useState();
  const [requestStatus, setRequestStatus] = useState('idle');

  useEffect(() => {
    fetchCountryByIsoCode(isoCode)
      .then((data) => {
        setCountry(data);
        setRequestStatus('success');
      })
      .catch(() => {
        // navigate('/error');
        setRequestStatus('error');
      });
  }, [isoCode]);

  return (
    <Page>
      <h1>Country</h1>
      {requestStatus === 'idle' && <p>Loading ...</p>}
      {requestStatus === 'error' && (
        <p>
          Something went wrong <span img="role">🙃</span> ...
        </p>
      )}
      {requestStatus === 'success' && (
        <>
          <h2>{country.name.common}</h2>

          <picture>
            <img src={country.flags.svg} alt={country.name.common} />
          </picture>
        </>
      )}
    </Page>
  );
};

export default Country;
