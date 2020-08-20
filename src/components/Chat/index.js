import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFile from '@material-ui/icons/AttachFile';
import Search from '@material-ui/icons/Search';
import './index.scss';

const Chat = () => {
  return (
    <div className='chat'>
      <div className='chat__header'>
        <Avatar src={`https://avatars.dicebear.com/api/human/123.svg`} />

        <div className='chat__headerInfo'>
          <h3>Room Name</h3>
          <p>Last Seen at...</p>
        </div>
        <div className='chat__headerRight'>
          <IconButton>
            <Search className='chat__headerRightIcon' />
          </IconButton>
          <IconButton>
            <AttachFile className='chat__headerRightIcon' />
          </IconButton>
          <IconButton>
            <MoreVertIcon className='chat__headerRightIcon' />
          </IconButton>
        </div>
      </div>
      <div className='chat__body'>
        <p className='chat__message'>
          {' '}
          <span className='chat__name'>Amar Gupta</span> Hi whatsup
          <span className='chat__timestamp'>3:53PM</span>
        </p>
        <p className='chat__message chat__reciever'>
          {' '}
          <span className='chat__name'>Amar Gupta</span> Hi whatsup
          <span className='chat__timestamp'>3:53PM</span>
        </p>
      </div>
      <div className='chat__footer'></div>
    </div>
  );
};

export default Chat;
