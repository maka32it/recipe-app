import React from 'react'
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles,GiChopsticks} from 'react-icons/gi';
import './Category.css'
import { NavLink } from 'react-router-dom';

export default function Category() {
  return (
    <div className='list'>
      <NavLink className='slink' to={'/cuisine/italian'}>
        <FaPizzaSlice/>
        <h4>Italian</h4>
      </NavLink>
      <NavLink className='slink' to={'/cuisine/american'}>
        <FaHamburger/>
        <h4>America</h4>
      </NavLink>
      <NavLink className='slink' to={'/cuisine/thai'}>
        <GiNoodles/>
        <h4>Thai</h4>
      </NavLink>
      <NavLink className='slink' to={'/cuisine/japanese'}>
        <GiChopsticks/>
        <h4>Japanese</h4>
      </NavLink>
    </div>
  )
}
