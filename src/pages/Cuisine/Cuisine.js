import React, { useEffect, useState } from 'react'
import './Cuisine.css'
import { motion } from 'framer-motion'
import {Link, useParams } from 'react-router-dom'

export default function Cuisine() {
    let params = useParams()
    const [cuisine,setCuisine] = useState([])
    const getCuisine = async (name)=>{
        const data =await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
        const recipes = await data.json()
        setCuisine(recipes.results)
    }
    useEffect(()=>{
        getCuisine(params.type)
    },[params])
  return (
    <motion.div
      animate={{opacity:1}}
      initial={{opacity:0}}
      exit={{opacity:0}}
      transition={{duration:.5}}
     className='grid'>
      {cuisine.map(item=>(
        <div
        key={item.id}
         className='card'>
            <Link to={'/recipe/'+item.id}>
            <img src={item.image} alt={item.titme}></img>
            <h4>{item.title}</h4>
            </Link>
         </div>
      ))}
    </motion.div>
  )
}
