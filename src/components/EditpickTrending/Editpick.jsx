import React from 'react'
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import './editpick.css'
const Editpick=()=> {
    const data=[
        { 
            
            title:'Monsoon expected to last longer than usual',
            des:'Since June, 1,303 mm of rain has been recorded, which is 88.5 percent of the season’s average, according to the Met office.',

        
            auth:'by john doe',
            date:'july 14',
            img:img1,

    
        },
        {
            title:'Monsoon expected to last longer than usual',
            des:'Since June, 1,303 mm of rain has been recorded, which is 88.5 percent of the season’s average, according to the Met office.',

            author:'by john doe',
            date:'july 14',

            img:img1,

        },
        {
            title:'Monsoon expected to last longer than usual',
            des:'Since June, 1,303 mm of rain has been recorded, which is 88.5 percent of the season’s average, according to the Met office.',

            auth:'by john doe',
            date:'july 14',

            img:img2,
        },
    
    ]
  
  return (
    <div>
    

    <div className='main-editorpick-container'>
    <h3 className='heading-editorpick'>    EditorPick
    </h3>
      
    {data.map((Editpick)=>(
        
        
        <div className='editorpick-container'>
       
       
        <div className='EditPick-container'>
              <div className='title-container'>
              {Editpick.title}

              </div>
              <div className='description'>        
{Editpick.des}
       </div> 
<div className='auth-containers'>
{Editpick.auth}

</div>
<div className='dates-container'>
{Editpick.date}
</div>


        

 </div>
 <div className='img-container'>   
 <img src={Editpick.img} alt='images' height={180} width={200}/>
 </div>
    
        </div>
       
    ))}</div></div>
    
  )
}

export default Editpick
