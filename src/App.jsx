import Profile from '../src/components/profile/Profile'
import userData from './userData.json'
import FriendsList from "./components/friends/Friends";
import friends from "./FriendsList.json"
import transactionData from './transactionData.json'
import Transaction from '../src/components/transaction/Transaction'

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
<Transaction items={transactionData}/>
    </>
  );
}

export default App
