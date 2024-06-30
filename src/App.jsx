import Profile from '../src/components/profile/Profile'
import userData from './userData.json'
import FriendsList from "./components/friends/Friends";
import friends from "./FriendsList.json"

// import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendsList friends={friends}
      />
    </>
  );
}

export default App
