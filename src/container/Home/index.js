import React, { useState } from 'react';
import SideBar from '../../components/Sidebar';
import Chat from '../../components/Chat';
import { Route, Switch } from 'react-router-dom';
import Login from '../../components/Login';
import './index.scss';

const Home = () => {
  const [user, setUser] = useState(null);
  return (
    <div className='app'>
      {!user ? (
        <Login />
      ) : (
        <div className='app_body'>
          <SideBar />
          <Switch>
            <Route exact path='/rooms/:roomId'>
              <Chat />
            </Route>
          </Switch>
        </div>
      )}
    </div>
  );
};

export default Home;
