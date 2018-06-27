import React from 'react';
import store from '../redux/store';
import { yourName } from '../redux/action';

store.dispatch(yourName({ firstName: 'John', lastName: 'Doe' }));

const { firstName, lastName } = store.getState();

export default () => (
  <div>
    Welcome to next.js!
    {' '}
    { firstName }
    {' '}
    { lastName }
  </div>
);
