import React from 'react'
import img4 from '../../Assets/img4.jpg'
import './mostread.css'
const MostRead=()=> {
    const data=[
        { 
            img:img4,
            title:' A tale of regret and remorse',
            des:'Since June, 1,303 mm of rain has been recorded, which is 88.5 percent of the season’s average, according to the Met office.Shivam Adhikari’s ‘Panchayat’ boldly confronts taboo subjects and their consequences within the context of rural Nepal.',

        
            auth:'by john doe',
            date:'july 14',
            

    
        },
    ]
  return (
    <div>
      <h3 className='titleofpopular'>Most popular</h3>
      <div className='Mostpopular-container'>
      {data.map((MostRead)=>(
        
        
        <div className='popular-container'>
       
       
        <div className='Popular-main-container'>
        <div className='imgs-container'>   
        <img src={MostRead.img} alt='images' height={350} width={420}/>
        </div>
       
        <div className='title-containers'>
              {MostRead.title}

              </div><br></br>
              <div className='description-container'>        
{MostRead.des}
       </div> 
<div className='by-container'>
{MostRead.auth}

</div>
<div className='date-container'>
{MostRead.date}
</div>

 
        

 </div>
    
        </div>
       
    ))}</div>
   
      
      </div>

    
  )
}

export default MostRead
