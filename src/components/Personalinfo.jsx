import React from 'react'
import image from '../assets/profile-pic.jpg'
import '../styles/mine.css'


function Personalinfo() {
  return (
    <div className='infosec'>
        <img  id = 'prof-pic'src={image}alt="profile pic" />
        <h1 id="info-head">Faith Itori Onyamasi</h1>
        <h2 id='info-desc'>Full-Stack Developer</h2>
        <a  id='info-link' href='#'>vilmaonyamasi@gmail.com</a>

    </div>
    
  )
}

export default Personalinfo