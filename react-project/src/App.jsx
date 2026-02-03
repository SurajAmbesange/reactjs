import UserCard from "./components/UserCard"
import './App.css'
import Suraj from './assets/Suraj.jpeg'
import Sohel from './assets/Sohel.png'
import Chiyawat from './assets/Chiyawat.png'
function App() {

  return (
    <div className="container">
      <UserCard name="Suraj Ambesange" desc="Software Developer"  image={Suraj}/>
      <UserCard name="Swapnil Raj" desc="UI/UX Designer" image={Sohel}/>
      <UserCard name="Priya Patel" desc="Data Analyst" image={Chiyawat}/>
    </div>
  )
}

export default App
