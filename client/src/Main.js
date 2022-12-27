import React, { useEffect, useState } from 'react'
import QandAns from './Components/QandAns'
import {
  SendOutlined
} from'@ant-design/icons';
import {useDispatch,useSelector} from "react-redux"
import {addValue,updateValue} from "./feature/itemData"
import axios from "axios";

const Main = () => {
  const [inputText,setInputText] = useState("")
  const dispatch = useDispatch()
  const itemsData = useSelector((state)=> state.AllData.value)
  console.log("🚀 ~ file:", itemsData)
  const [response,setResponse] = useState({
    text : "",
    serverResponse: ""

  })

  
  const handleClick = async (inputText)=>{
    dispatch(addValue({text : inputText, serverResponse : ""}))
    // axios.post("http://localhost:5000",{text : inputText})
    // .then(res => setResponse({text : inputText, serverResponse : res.data.bot}))
    // .catch(err => console.log(err))
   
   let res =  await fetch("https://mushy-cyan-kerchief.cyclic.app/",{
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text : inputText,
      })
    })
    .then(response => console.log(response))
    setInputText("")
  }
 
  useEffect(()=>{
   if(response.text !== ""){
    dispatch(updateValue(response))
   }
   
  },[response])

  
  return (
    <div className='appWrapper'>
    <div className='container'>
      {
        itemsData?.map((item,ind)=>{
          return ( <QandAns key={ind} data = {{item,ind}}></QandAns>)
        })
      }
    

   
     <div className='row findSection'>
      <div className='col-lg-8 offset-lg-2 d-flex col-12' >
            <textarea value={inputText} onChange={(e)=> setInputText(e.target.value) } className=' form-control' style={{resize : "none"}} cols="1" rows="1" placeholder="type what you want to know..."/>
            <button className='btnClass' onClick={()=> handleClick(inputText)}><SendOutlined /></button>
      </div>
       </div>

       </div>
     </div>


  )
}

export default Main