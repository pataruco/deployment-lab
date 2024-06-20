export const fetchAllCountries = async () => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    return data;
  } catch (error) {
    throw Error('Soemthing went wrong fetching countries.', error.message);
  }
}
