import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Epoques from './pages/Epoques'
import Genres from './pages/Genres'
import Gallery from './pages/Gallery'



export default function App() {
  return (

    <div>
       <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/epoques" element={<Epoques />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>

  )
}


