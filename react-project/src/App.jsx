import UserCard from "./components/UserCard"
import './App.css'
import Suraj from './assets/Suraj.jpeg'
import Sohel from './assets/Sohel.png'
import Chiyawat from './assets/Chiyawat.png'
function App() {

  return (
    <div className="container">
      <UserCard name="Suraj Ambesange" desc="Software Developer" image={Suraj} style={{"border-radius":"10px"}}/>
      <UserCard name="Swapnil Raj" desc="UI/UX Designer" image={Sohel} style={{"border-radius":"10px"}}/>
      <UserCard name="Priya Patel" desc="Data Analyst" image={Chiyawat} style={{"border-radius":"10px"}}/>
    </div>
  )
}

export default App
