import React from 'react';
import SidebarChat from '../SidebarChat';
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import SearchOutlined from '@material-ui/icons/Search';
import './index.scss';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      {/* Header Start */}
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
      {/* Header End */}
      {/* Search start */}
      <div className='sidebar__search'>
        <div className='sidebar__searchContainer'>
          <SearchOutlined />
          <input type='text' placeholder='Search or Start new chat' />
        </div>
      </div>
      {/* Search end */}
      {/* Chat start */}
      <div className='sidebar__chats'>
        <SidebarChat addNewChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />

      </div>
      {/* Chat end */}
    </div>
  );
};

export default Sidebar;
