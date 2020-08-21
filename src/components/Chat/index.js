import React, { useState, useEffect } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFile from '@material-ui/icons/AttachFile';
import Search from '@material-ui/icons/Search';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { useParams } from 'react-router-dom';
import { useStateValue } from '../../context/stateProvider';
import './index.scss';
import Swal from 'sweetalert2';
import firestore, { firebase, auth } from '../../firebase';

const Chat = () => {
  const [{ user }] = useStateValue();
  const [message, setMessage] = useState([]);
  const [messages, setMessages] = useState([]);
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState('');
  useEffect(() => {
    if (roomId) {
      firestore
        .collection('rooms')
        .doc(roomId)
        .onSnapshot((snap) => setRoomName(snap.data().name));
      firestore
        .collection('rooms')
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snap) => setMessages(snap.docs.map((doc) => doc.data())));
    }
  }, [roomId]);
  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to Logout',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, take me out of it!',
    }).then((result) => {
      if (result.value) {
        auth.signOut();
        Swal.fire('Done!', 'nice', 'success');
      }
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    firestore.collection('rooms').doc(roomId).collection('messages').add({
      messages: message,
      name: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    console.log(message);
    setMessage('');
  };
  return (
    <div className='chat'>
      <div className='chat__header'>
        <Avatar src={`https://avatars.dicebear.com/api/human/${roomId}.svg`} />

        <div className='chat__headerInfo'>
          <h3>{roomName}</h3>
          <p>
            last seen
            {new Date(
              messages[messages.length - 1]?.timestamp?.toDate()
            ).toString()}
          </p>
        </div>
        <div className='chat__headerRight'>
          <IconButton>
            <Search className='chat__headerRightIcon' />
          </IconButton>
          <IconButton>
            <AttachFile className='chat__headerRightIcon' />
          </IconButton>
          <IconButton>
            <MoreVertIcon
              className='chat__headerRightIcon'
              onClick={() => handleLogout()}
            />
          </IconButton>
        </div>
      </div>
      <div className='chat__body'>
        {messages.map((data, index) => (
          <p
            key={index}
            className={`chat__message ${
              data.name === user.displayName && 'chat__reciever'
            }`}
          >
            <span className='chat__name'>{data.name}</span>
            {data.messages}
            <span className='chat__timestamp'>
              {new Date(data.timestamp?.toDate()).toString()}
            </span>
          </p>
        ))}
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
