import './index.css';

import { Link } from 'react-router-dom';

import GaLogo from '../GaLogo';

const Header = () => {
  return (
    <header className="header">
      <div>
        <Link to="/">
          <GaLogo />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/weather">weather</Link>
          </li>
          <li>
            <Link to="/countries">countries</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
