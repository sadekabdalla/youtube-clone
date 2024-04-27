import { useState } from "react"
import Navbare from "./Components/Nav/Navbar"
import Home from "./Pages/Home/Home"
import { Routes,Route } from "react-router-dom"
import Video from "./Pages/Video/Video"



export default function App  ()  {
  const [show,setShow] =useState(true)
  return (
    <div>
      <Navbare  setShow={setShow}  />
      <Routes>
          <Route path='/' element={<Home show={show} />} />
          <Route path='/video/:categryId/:videoId' element={<Video/>} />
      </Routes>
      
    </div>
  )
}