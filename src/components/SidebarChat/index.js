import React, { useState, useEffect } from 'react';
import { Avatar } from '@material-ui/core';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
import firebase from '../../firebase';
import './index.scss';
import firestore from '../../firebase';

const SidebarChat = ({ addNewChat, id, name }) => {
  const history = useHistory();
  const [seed, setSeed] = useState('');
  const [message, setMessage] = useState('');
  useEffect(() => {
    if (id) {
      firestore
        .collection('rooms')
        .doc(id)
        .collection('messages')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snap) => setMessage(snap.docs.map((doc) => doc.data())));
    }
  }, [id]);
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  const createChat = async () => {
    const { value } = await Swal.fire({
      title: 'Please Enter Name for Chat',
      input: 'text',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'You need to write something!';
        } else {
          firebase.collection('rooms').add({ name: value });
        }
      },
    });

    if (value) {
      Swal.fire(`Your Chat Room Name is ${value}`);
    }
  };
  return !addNewChat ? (
    <div className='sidebarChat' onClick={() => history.push(`/rooms/${id}`)}>
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className='sidebarChat__info'>
        <h2>{name}</h2>
        <p>{message[0]?.messages}</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className='sidebarChat'>
      <h2>Add New Chat</h2>
    </div>
  );
};

export default SidebarChat;
