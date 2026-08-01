
import './App.css'
import FriendList from './components/friend/FriendList'
import FriendListItem from './components/friend/FriendListItem'
import Profile from './components/Profile'
import Statistics from './components/Statistics'
import TransactionHistory from './components/TransactionHistory'

import user from "./data/profile.json"
import stats from "./data/statistics.json"
import friends from "./data/friends.json"
import items from "./data/transactions.json"
function App() {

  return (
    <>
    <Profile user={user} />
    <Statistics stats={stats} />
    <FriendList friends={friends} />
    <TransactionHistory items={items} />
    </>
  )
}

export default App
