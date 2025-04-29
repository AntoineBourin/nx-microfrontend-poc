import { useSelector } from 'react-redux';
import Home from './home';
const HomeContainer = () => {
  const { user } = useSelector((state: any) => state.user);
  return <Home user={user} />;
};

export default HomeContainer;
