import { Link } from 'react-router-dom';
import { IoHome } from 'react-icons/io5';
import './styles.css';

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <IoHome size={24} />
          </Link>
        </li>
        <li>
          <Link to="/useState">useState</Link>
        </li>
        <li>
          <Link to="/useEffect">useEffect</Link>
        </li>
      </ul>
    </nav>
  );
};
