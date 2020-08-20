import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const NotFound = () => {
  return (
    <div className='notFound'>
      <div class='container404'>
        <h2>Oops! Page not found.</h2>
        <h1>404</h1>
        <p>We can't find the page you're looking for.</p>
        <Link to='/'>Go back home</Link>
      </div>
    </div>
  );
};

export default NotFound;
