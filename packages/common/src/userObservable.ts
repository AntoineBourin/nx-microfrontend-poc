import mitt from 'mitt';
import { User } from './domain/types/user';

type Events = {
  SIGN_IN: User;
};

const emitter = mitt<Events>();

export { emitter };
