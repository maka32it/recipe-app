import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';


export default function Veggie() {
  const [veggie,setVeggie] = useState([])
    async function getVeggie(){
        const check = localStorage.getItem('veggie')
        if(check){
            setVeggie(JSON.parse(check))
        } else {
            const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
            const data = await response.json()
            localStorage.setItem('veggie',JSON.stringify(data.recipes))
        }
    }
    useEffect(()=>{
      getVeggie()
    },[])
  return (
    <Card data={veggie} title={'Our Vegetarian picks'} Page={3}/>
  )
}
