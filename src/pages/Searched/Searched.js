import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom'
import './Searched.css'

export default function Searched() {
    let params = useParams();
    const[searched,setSearched] = useState([])
    const getSearched = async (name)=>{
        const data =await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
        const recipes = await data.json()
        setSearched(recipes.results)
    }
    useEffect(()=>{
        getSearched(params.search)
        console.log(searched)
    },[params.search])
  return (
    <motion.div
      animate={{opacity:1}}
      initial={{opacity:0}}
      exit={{opacity:0}}
      transition={{duration:.5}}
     className='grid'>
      {searched.map(item=>(
        <div
        className='card'
        key={item.id}
        >
          <Link to={'/recipe/' +item.id}>
          <img src={item.image} alt={item.title}></img>
          
          </Link>
          <h4>{item.title}</h4>
        </div>
      ))}
    </motion.div>
  )
}
