import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import './Search.css'
import { useNavigate } from 'react-router-dom'
export default function Search() {
  const navigate = useNavigate()
  const [inputVal,setInputval] = useState('')
  const submitHandler = (e)=>{
    e.preventDefault()
    navigate(`/searched/${inputVal}`)
  }
  return (
    <form onSubmit={submitHandler}>
      <div>
      <FaSearch className='svg'/>
      <input
      onChange={(e)=>setInputval(e.target.value)}
        value={inputVal}
       type='text'></input>
      </div>
    </form>
  )
}
