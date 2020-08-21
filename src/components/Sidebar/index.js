import React, { useState, useEffect } from 'react';
import SidebarChat from '../SidebarChat';
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import SearchOutlined from '@material-ui/icons/Search';
import firebase from '../../firebase';
import './index.scss';

const Sidebar = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    const unSubscribe = firebase.collection('rooms').onSnapshot((snap) =>
      setRooms(
        snap.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    return () => {
      unSubscribe();
    };
  }, []);
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <Avatar />
        <div className='sidebar__headerRight'>
          <IconButton>
            <DonutLargeIcon className='sidebar__headerRightIcon' />
          </IconButton>
          <IconButton>
            <ChatIcon className='sidebar__headerRightIcon' />
          </IconButton>
          <IconButton>
            <MoreVertIcon className='sidebar__headerRightIcon' />
          </IconButton>
        </div>
      </div>
      <div className='sidebar__search'>
        <div className='sidebar__searchContainer'>
          <SearchOutlined />
          <input type='text' placeholder='Search or Start new chat' />
        </div>
      </div>
      <div className='sidebar__chats'>
        <SidebarChat addNewChat />
        {rooms.map((room) => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
