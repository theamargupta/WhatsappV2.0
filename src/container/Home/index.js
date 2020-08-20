import React from 'react';
import SideBar from '../../components/Sidebar';
import Chat from '../../components/Chat';
import './index.scss';

const Home = () => {
  return (
    <div className='app'>
      <div className='app_body'>
        <SideBar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
