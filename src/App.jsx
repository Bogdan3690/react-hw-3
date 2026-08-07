
import './App.css'
import FriendList from './components/Friend/FriendList'
import FriendListItem from './components/Friend/FriendListItem'
import Profile from './components/Profile/Profile'
import Statistics from './components/Statistics/Statistics'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'

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
