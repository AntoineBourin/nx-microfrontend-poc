import { emitter } from '@manutan-test/common';
import { User } from 'packages/common/src/domain/types/user';
import { useEffect, useState } from 'react';
import Home from './home';

const HomeContainer = () => {
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    emitter.on('SIGN_IN', (user: User) => {
      setUser(user);
    });
  }, []);

  return <Home user={user} />;
};

export default HomeContainer;
