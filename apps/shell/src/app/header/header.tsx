import { Button, Icon, IconButton } from '@manutan/parcel-ui';
import { User } from 'packages/common/src/domain/types/user';
import { Link } from 'react-router-dom';

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
          <Button size="md" onClick={handleSignIn}>
            Se connecter
          </Button>
          <IconButton
            size="sm"
            className="bg-button-surface-primary"
            variant="primary"
          >
            <Icon name="search" />
          </IconButton>
        </li>
      </ul>
      {user && <p>Utilisateur connecté : {user.name}</p>}
    </header>
  );
};

export default Header;
