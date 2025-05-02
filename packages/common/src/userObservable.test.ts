import { emitter } from './userObservable';

describe('userObservable', () => {
  it('should be defined', () => {
    expect(emitter).toBeDefined();
  });

  it('should emit and receive a user event', () => {
    emitter.on('SIGN_IN', (user) => {
      expect(user).toEqual({ id: '1', name: 'John Doe' });
    });
    emitter.emit('SIGN_IN', { id: '1', name: 'John Doe' });
  });
});
