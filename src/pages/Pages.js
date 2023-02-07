import React from 'react'
import Home from './Home'
import { Route,Routes, useLocation } from 'react-router-dom'
import Cuisine from './Cuisine/Cuisine'
import Searched from './Searched/Searched'
import Recipe from './Recipe/Recipe'
import { AnimatePresence } from 'framer-motion'

export default function Pages() {
  const location = useLocation()
  return (
    <AnimatePresence
    exitBeforeEnter
    >
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/cuisine/:type' element={<Cuisine/>}></Route>
      <Route path='/searched/:search' element={<Searched/>}></Route>
      <Route path='/recipe/:id' element={<Recipe/>}></Route>
    </Routes>
    </AnimatePresence>
  )
}
