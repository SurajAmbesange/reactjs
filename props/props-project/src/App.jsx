
import './App.css'
import Card from './components/Card'
import { useState } from 'react'

function App() {
const [name, setName] = useState('');
  return (
    <div>
      <Card name = {name} setName = {setName} />
    </div>
  )
}

export default App
 