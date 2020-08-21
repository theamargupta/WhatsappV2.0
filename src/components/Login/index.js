import React from 'react';
import { Button } from '@material-ui/core';
import { signInWithGoogle } from '../../firebase';
import './index.scss';

const Login = () => {
  const signin = () => {
    signInWithGoogle().then((result) => console.log(result));
  };

  return (
    <div className='login'>
      <div className='login__container'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/150px-WhatsApp.svg.png'
          alt=''
        />

        <div className='login__text'>
          <h1>Sign into whatsapp</h1>
        </div>
        <Button onClick={signin}>Sign in with Google</Button>
      </div>
    </div>
  );
};

export default Login;
