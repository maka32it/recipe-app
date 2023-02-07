import React from 'react'
import './Card.css'
import {Splide,SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import {AiOutlineHeart} from 'react-icons/ai'
import { Link } from 'react-router-dom';
export default function Card({data,title,Page}) {
  
  return (
    <div>
    <div
    className='popular'>
        <h2>{title}</h2>
        <Splide options={{
            perPage:Page,
            arrows:false,
            pagination:false,
            drag:'free',
            gap:'5rem',
        }}>
       {data.map(item=>(
       <SplideSlide key={item.id}>
       <Link to={'/recipe/'+ item.id}
         className='card'>
            <p>{item.title}</p>
            
            <div className='img-wrap'>
              <img src={item.image} alt={item.title}>
            </img>  
            
            </div>
            <button className='ready'> <AiOutlineHeart style={{marginRight:'1px'}} size={20}/>
             {item.healthScore}</button>
            {item.vegetarian ? <button className='vegan'>Vegan</button> : null }
        </Link>
       </SplideSlide>
       ))}
        </Splide>
        </div>
    </div>
  )
}
