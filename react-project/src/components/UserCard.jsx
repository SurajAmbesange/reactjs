import React from 'react'
import './Usercard.css'
import Suraj from '../assets/Suraj.jpeg'
const UserCard = () => {
  return (
    <div className='user-container'>
        <img id="user-img" src={Suraj} alt="Suraj"></img>
        <p id="user-title">Suraj Ambesange</p>
        <p id="user-desc">Description of Suraj Ambesange</p>
    </div>  
    )
}
   
export default UserCard  
