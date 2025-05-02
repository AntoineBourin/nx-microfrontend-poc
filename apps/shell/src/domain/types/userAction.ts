import { User } from 'packages/common/src/domain/types/user';

export enum UserAction {
  SIGN_IN = 'SIGN_IN',
  CREATE_USER = 'CREATE_USER',
}

export type UserState = {
  user?: User;
};
