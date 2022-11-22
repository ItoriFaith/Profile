import React from 'react'
import {ImTwitter} from 'react-icons/im'
import {FaFacebookSquare} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {ImGithub} from 'react-icons/im'
import {MdMarkEmailRead} from 'react-icons/md'
import {CiLinkedin} from 'react-icons/ci'


function Footer() {
  return (
    <div className='footer'>
        <a  href ='https://mobile.twitter.com/vilmaonyamasi'><ImTwitter className='social-icon' id='twitter'/></a>
        <a href ='#'><FaFacebookSquare className='social-icon' id='facebook'/></a>
        <a href ='#'><BsInstagram className='social-icon'id='instagram'/></a>
        <a href ='https://github.com/ItoriFaith'><ImGithub className='social-icon' id='github'/></a>

         <a className='social-icon' id ='email' href='#'> <MdMarkEmailRead id='icon'/></a>
        <a  className = 'social-icon' id='linkedin' href='https://www.linkedin.com/in/faith-onyamasi'> <CiLinkedin  id= 'icn'/></a>
      

    </div>
  )
}

export default Footer