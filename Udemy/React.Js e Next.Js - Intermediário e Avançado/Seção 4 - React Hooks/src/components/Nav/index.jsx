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
        <li>
          <Link to="/useCallback">useCallback</Link>
        </li>
        <li>
          <Link to="/useMemo">useMemo</Link>
        </li>
        <li>
          <Link to="/useRef">useRef</Link>
        </li>
        <li>
          <Link to="/useContext">useContext</Link>
        </li>
        <li>
          <Link to="/useReducer">useReducer</Link>
        </li>
        <li>
          <Link to="/useFetch">useFetch</Link>
        </li>
        <li>
          <Link to="/useAsync">useAsync</Link>
        </li>
        <li>
          <Link to="/useLayoutEffect">useLayoutEffect</Link>
        </li>
        <li>
          <Link to="/useImperativeHandle">useImperativeHandle</Link>
        </li>
        <li>
          <Link to="/useDebugValue">useDebugValue</Link>
        </li>
      </ul>
    </nav>
  );
};
