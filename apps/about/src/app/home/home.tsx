const Home = ({ user }: { user?: any }) => {
  return (
    <div>
      <h1>Page a propos</h1>
      {user && <p>Bonjour, {user.name}</p>}
    </div>
  );
};

export default Home;
