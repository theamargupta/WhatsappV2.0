import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { signInWithGoogle, auth } from '../../firebase';
import { actionGenrator } from '../../context/reducer';
import { useStateValue } from '../../context/stateProvider';
import './index.scss';

const Login = () => {
  // eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();
  const signin = () => {
    signInWithGoogle().then((result) => dispatch(actionGenrator(result.user)));
  };
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      dispatch(actionGenrator(user));
    });
  }, [dispatch]);
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
