import { emitter } from '@manutan-test/common';
import { useDispatch, useSelector } from 'react-redux';
import { UserAction } from '../../domain/types/userAction';
import Header from './header';

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.user);

  const handleSignIn = () => {
    emitter.emit('SIGN_IN', { id: '1', name: 'John Doe' });
    dispatch({
      type: UserAction.SIGN_IN,
      payload: { id: 1, name: 'John Doe' },
    });
  };

  return <Header user={user} handleSignIn={handleSignIn} />;
};

export default HeaderContainer;
