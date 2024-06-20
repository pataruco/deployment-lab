const BASE_URL = 'https://restcountries.com/v3.1/alpha'


export const fetchCountryByIsoCode = async (isoCode) => {
  try {
    const response = await fetch(`${BASE_URL}/${isoCode}`);
    const [data] = await response.json()
    return data;
  } catch (error) {
    throw Error('Something went wron fetching country by ISO code.', error.message);
  }

}
