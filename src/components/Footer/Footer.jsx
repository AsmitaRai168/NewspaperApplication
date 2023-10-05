import React from 'react'
import './Footer.css'
import CommentSection from '../CommentSection/CommentSection'
import SocialMedia from '../SocialMedia/SocialMedia'
const Footer=()=> {
  return (
    <div>
      <div className='footer-main-container'>
      <div className='footer-container'>
      <div className='about-container'>
    <h1 className='about-container'>about us</h1>  
    <h3 className='about-description'>
    This website is the official news portal of Kantipur National Daily. 
    This Nepali language portal covers news, views, entertainment, sports, world, 
    information technology, 
    videos and news and analysis of various dimensions of life.</h3>
    </div>
    <div className='usefulLink'>
    <h1 className='link-container'>usefulLink</h1>
    <h3 className='link-description'>
    Advertisement - Magazine
    Suggest advice
    Get in touch
    
    <SocialMedia/>
    </h3>
    </div>
    <div className='Comment-section'>
    
    <h1 className='comment-container'>comment</h1>
    <CommentSection></CommentSection>
    
    </div>
      </div>
      </div>
    </div>
  )
}

export default Footer
