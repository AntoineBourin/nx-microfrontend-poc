import { User } from 'packages/common/src/domain/types/user';

const Home = ({ user }: { user?: User }) => {
  return (
    <div>
      <h1>Page about</h1>
      {user && <p>Bonjour, {user.name}</p>}
    </div>
  );
};

export default Home;
