import React from 'react';
import { AuthWrap } from '../components/hoc';

const Home = AuthWrap(props => {
  return (
    <div className='position-relative main-content'>
      <h3>Welcome</h3>
      <p>Check out these awesome features</p>
    </div>
  );
});

export default {
  component: Home
}