import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';

export default function Popular() {
    const [popular,setPopular] = useState([])
    async function getPopular(){
        const check = localStorage.getItem('popular')
        if(check){
            setPopular(JSON.parse(check))
        } else {
            const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
            const data = await response.json()
            localStorage.setItem('popular',JSON.stringify(data.recipes))
        }
    }
    useEffect(()=>{
        getPopular()
    },[])
  return (
    <Card data={popular} title={'Popular pics'} Page={4}/>
  )
}
