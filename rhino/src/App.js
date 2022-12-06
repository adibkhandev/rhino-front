import React from 'react'
import Landing from './all-pages/Landing'
import RunningOut from './all-pages/RunningOut'
import MostPopular from './all-pages/MostPopular'
import Categories from './all-pages/categories'
import Searched from './all-pages/Searched'
import Bottom from './all-pages/Bottom-nav'
import Post from './all-pages/Post'
import Navigation from './all-pages/Navigation-ash'
import Cart from './all-pages/Cart'
import Bill from './all-pages/Bill'
import Reviewer from './all-pages/Reviewer'
import LogReg from './all-pages/Log-reg'
import Nav from "./all-pages/Nav"
import {Taka} from "./all-pages/Components"
import {BrowserRouter , Routes,Route,Link} from "react-router-dom"
const App = () => {
  return (
     <>
          <BrowserRouter>
            <Routes>
            
              <Route path="/" element={<Landing/>} ></Route>
              <Route path="/categories" element={<Categories/>} ></Route>
              <Route path="/cart" element={<Cart/>} ></Route>
              <Route path="/post" element={<Post/>} ></Route>
              <Route path="/searched" element={<Searched/>} ></Route>
              <Route path="/bill" element={<Bill/>} ></Route>
              <Route path="/reviewer" element={<Reviewer/>} ></Route>
              <Route path="/login" element={<LogReg/>} ></Route>
             
            </Routes>
          </BrowserRouter>
     </>
  )
}

export default App