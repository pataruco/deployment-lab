import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">weather</Link>
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
