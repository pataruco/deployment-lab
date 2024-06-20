
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = '870b1b10b58578f725b70b13aff6c357'


export const fetchWeatherByCity = async (city) => {

  try {
    const response = await fetch(`${BASE_URL}?q=${city}&APPID=${API_KEY}&units=metric`, {
      method: 'GET'
    });
    const { main: {
      temp
    }, weather } = await response.json()
    const { description } = weather[0];
    return { temp, description };
  } catch (error) {
    throw Error('Something went off when calling Open Weathewr API.', error.message)
  }

}
