import { Route, Routes } from 'react-router-dom';
import CountriesPage from './pages/Countries';
import HomePage from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/countries" element={<CountriesPage />} />
      </Routes>
    </>
  );
}

export default App;
