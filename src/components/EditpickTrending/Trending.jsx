import React from 'react'
import img3 from '../../Assets/img3.jpg'
import './trending.css'
const Trending=()=> {
    const data=[{
        headline:'Indians, Chinese apply to build electric vehicle plants',
        images:img3,
    },
    {
        headline:'Nepalis count their paisas as prices take off',
        images:img3,
    },
    {
        headline:'A strong dollar’s implications for Nepal',
        images:img3,
    },
    {
        headline:'IT is one of the fastest-growing industries in Nepal, report say',
        images:img3,

        
    },
    {
        headline:'MCC-funded power line uncertain as bidders quote high price',
        images:img3,
    },

]
  return (
    <div>
    <h3 className='trending-heading'>Trending</h3>
    {data.map((Trending)=>(
        <div className='Trending-main-container'>
       <div className='image-headline-container'>
       <div className='headline-container'>
        {Trending.headline}
        </div>
       </div>
        
        <div>
        <div className='Image-container'>
        <img src={Trending.images} alt='' height={100} width={100}></img>
        </div>
       
        
</div>
        
        </div>
    ))}

    </div>
  )
}

export default Trending
