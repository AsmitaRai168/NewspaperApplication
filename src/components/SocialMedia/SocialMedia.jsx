
import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaSkype } from "https://cdn.skypack.dev/react-icons/fa";
import './socialmedia.css';
const SocialMedia=()=>{
  return (
    <div className='social'>
    <a href="https://www.facebook.com"><FaFacebook /></a>
    <a href="https://www.instagram.com"><FaInstagram /></a>
    <a href="https://www.twitter.com"><FaTwitter /></a>
    <a href="https://www.skype.com"><FaSkype /></a>
    </div>
  )
}

export default SocialMedia
