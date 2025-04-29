import { Link } from 'react-router-dom';
import { User } from '../../domain/types/user';

const Header = ({
  user,
  handleSignIn,
}: {
  user: User | undefined;
  handleSignIn: () => void;
}) => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">A propos</Link>
        </li>
        <li>
          <Link to="#" onClick={handleSignIn}>
            Se connecter
          </Link>
        </li>
      </ul>
      {user && <p>Utilisateur connecté : {user.name}</p>}
    </header>
  );
};

export default Header;
