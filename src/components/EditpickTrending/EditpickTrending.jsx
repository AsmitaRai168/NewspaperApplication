import React from 'react'
import Editpick from './Editpick'
import './EditpickTrend.css'
import MostRead from './MostRead'
import Trending from './Trending'
function EditpickTrending() {
  return (
    <div className='main-edittrend-container'>
    <div className='editpick-container'>
    <Editpick/>
    </div>
    <div className='Big-News'>
    <MostRead/>
    </div>
    <div className='Trending-container'>
    <Trending/>
    </div>
    
    </div>
  )
}

export default EditpickTrending
