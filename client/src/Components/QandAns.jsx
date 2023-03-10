import React, { useEffect, useState } from 'react'
import Abatar from "../asset/21-avatar-lineal.gif"
import Robot from "../asset/robot.gif"
import {  Spin } from 'antd';
import { Typewriter } from 'react-simple-typewriter'


const QandAns = ({data}) => {
const [ansContent,setAnsContent] = useState("")



 const {item,ind} = data
//  useEffect(()=>{
//    let index = 0;
//    if(index < item.serverResponse.length){
//        setAnsContent(`${ansContent}${item.serverResponse[index]} `)
//        index++
//    }
//  },[ansContent])




  return (
    <div className={`row  ${(ind == 0 )? "pt-5" : "py-2" }`}>
      <div className='col-12 d-flex '>
      <span className='icon'  style={{borderRadius :"10px"}}><img src={Abatar} alt="abatar" className='img-fluid abatarIcon' /> </span> 
       <div className='qWrapper ' style={{ padding : "0px 50px"}}>
         <p className='p-0 qPtag'>{item.text}</p>
        </div>
      </div>
      <div className='col-12 d-flex mt-2'>
      <p className='icon'><img src={Robot} alt="Robot" className=' abatarIcon' /> </p> 
      <div className='ansWrapper'  >
      {item.serverResponse == "" ? ( <Spin className='pt-1' size='large' />) : (
 <div className='p-0 qPtag' > 
  <Typewriter
            words={[`${item.serverResponse}`]}
            typeSpeed={40}
          
           
            
          />
 </div>
      ) }
      
       {item.serverResponse.length > 0 && (<button style={{fontSize : "20px"}} className="my-2" ><i class="fa fa-volume-up" aria-hidden="true"></i></button>)}
        </div>

       
      </div>
      
    </div>
  )
}

export default QandAns