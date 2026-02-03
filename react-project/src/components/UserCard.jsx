import React from 'react'
import './Usercard.css'
import Suraj from '../assets/Suraj.jpeg'
const UserCard = (props) => {
  return (
    <div className='user-container'>
        <p id="user-title">{props.name}</p>
        <img id="user-img" src={props.image} alt="Suraj"></img>
        <p id="user-desc">{props.desc}</p>
    </div>  
    )
}
   
export default UserCard  
