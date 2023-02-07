import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Recipe.css'

export default function Recipe() {
  const [details,setDetails] = useState({})
  const [activeTab,setActiveTab] = useState('instructions')
  let params = useParams()
  async function fetchDetails(){
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const info = await data.json()
    setDetails(info);
  }
  useEffect(()=>{
    fetchDetails()
  },[params.name])
  return (
    <div className='detail'>
      <div className='img'>
      <h2>{details.title}</h2>
        <img src={details.image} alt={details.title}></img>
      </div>
      <div className='info'>
        <div className='buttons'>
        <button
        className={activeTab==='instructions' ? 'active' : ''}
         onClick={()=>setActiveTab('instructions')}>Instructions</button>
        <button 
        className={activeTab==='ingredients' ? 'active' : ''}
        onClick={()=>setActiveTab('ingredients')}>Ingredients</button>
        </div>
        {activeTab === 'instructions' && (
        <div className='text'>
          <h3 dangerouslySetInnerHTML={{__html:details.summary}}></h3>
          <h3 dangerouslySetInnerHTML={{__html:details.instructions}}></h3>
        </div>
       )}
       {activeTab === 'ingredients' && (
        <ul className='list'>
          {details.extendedIngredients?.map(item=>(
            <li key={item.id}>{item.original}</li>
          ))}
        </ul>
       )}
      </div>
    </div>
  )
}
