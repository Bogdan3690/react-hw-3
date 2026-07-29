
import './App.css'
import Profile from './components/Profile'
import Statistics from './components/Statistics'
import user from "./data/profile.json"
import stats from "./data/statistics.json"
function App() {

  return (
    <>
    <Profile user={user} />
    <Statistics stats={stats} />
    </>
  )
}

export default App
