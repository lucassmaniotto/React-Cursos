import { Link } from 'react-router-dom';
import './styles.css';

export default function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/sobre/">Sobre</Link>
      <Link to="/contato">Contato</Link>
    </nav>
  );
}
