import { Route, Routes } from 'react-router-dom';
import CountriesPage from './pages/Countries';
import CountryPage from './pages/Country';
import HomePage from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/countries" element={<CountriesPage />} />
        <Route path="/country/:isoCode" element={<CountryPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
