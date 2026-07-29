
import './App.css'
import Profile from './components/Profile'
import user from "./data/profile.json"
function App() {

  return (
    <>
    <Profile user={user} />
    </>
  )
}

export default App
