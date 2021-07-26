import React from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from 'react-chat-engine';
import {auth} from '../firebase';

import {useAuth} from '../contexts/AuthContext';

const Chats = () => {
  const history = useHistory();
  const { user } = useAuth();

  console.log(user);

  const handleLogout = async () => {
    await auth.signOut();
    history.push('/');
  }

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">
          unichat
        </div>
        <div onClick={handleLogout} className="logout-tab">
          logout
        </div>
      </div>
      <div>
        <ChatEngine 
          height="calc(100vh - 66px)"
          projectId="43f3e775-d2f1-4c53-a22b-cdc4879c0bc8"
          userName="."
          userSecret="."
        />
      </div>
    </div>
  );
};

export default Chats;