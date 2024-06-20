import { Route, Routes } from 'react-router-dom';
import CountriesPage from './pages/Countries';
import CountryPage from './pages/Country';
import HomePage from './pages/Home';
import NotFoundPage from './pages/NotFound';
import WeatherPage from './pages/weather';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/weather" element={<WeatherPage />} />
        <Route path="/countries" element={<CountriesPage />} />
        <Route path="/country/:isoCode" element={<CountryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
