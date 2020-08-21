import React, { useState, useEffect } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFile from '@material-ui/icons/AttachFile';
import Search from '@material-ui/icons/Search';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { useParams } from 'react-router-dom';
import './index.scss';
import firestore from '../../firebase';

const Chat = () => {
  const [message, setMessage] = useState('');
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState('');
  useEffect(() => {
    if (roomId) {
      firestore
        .collection('rooms')
        .doc(roomId)
        .onSnapshot((snap) => setRoomName(snap.data().name));
    }
  }, [roomId]);
  const handleClick = (e) => {
    e.preventDefault();
    console.log(message);
    setMessage('');
  };
  return (
    <div className='chat'>
      <div className='chat__header'>
        <Avatar src={`https://avatars.dicebear.com/api/human/${roomId}.svg`} />

        <div className='chat__headerInfo'>
          <h3>{roomName}</h3>
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
          <span className='chat__name'>Amar Gupta</span> Hi whatsup
          <span className='chat__timestamp'>3:53PM</span>
        </p>
        <p className={`chat__message ${true && 'chat__reciever'}`}>
          <span className='chat__name'>Amar Gupta</span> Hi whatsup
          <span className='chat__timestamp'>3:53PM</span>
        </p>
      </div>
      <div className='chat__footer'>
        <InsertEmoticonIcon />
        <form onSubmit={handleClick}>
          <input
            type='text'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Type a message'
          />
        </form>
        <MicIcon />
      </div>
    </div>
  );
};

export default Chat;
