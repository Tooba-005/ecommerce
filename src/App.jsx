// import React from 'react'
import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Home_detail from "./Components/Home_detail"
import Page from "./Components/Page"
import Carousel from "./Components/Carousel"
import Shopping from "./Components/Shopping"
import Rest from "./Components/Rest"
import Rest_1 from "./Components/Rest_1"

const App = () => {
  return (
    <div className="text-center">
    <Navbar/>
    <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route path="/:id" element={<Home_detail/>}/>
    <Route path="/page" element={<Page/>}/>
    <Route path="/shopping" element={<Shopping/>}/>
    <Route path="/rest" element={<Rest/>}/>
    <Route path="/rest1" element={<Rest_1/>}/>
    <Route path="/carousel" element={<Carousel/>}/>
    </Routes>
    </div>
  )
}

export default App
