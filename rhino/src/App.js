import React,{useState,useEffect,useContext} from 'react'
import Order from './all-pages/Order'
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
import Liked from './all-pages/Liked'
import LogReg from './all-pages/Log-reg'
import Nav from "./all-pages/Nav"
import Load from "./all-pages/Load"
import Account from "./all-pages/Account"
import {Taka} from "./all-pages/Components"

import {AuthProvider,Context} from './all-pages/Context'


import {BrowserRouter , Routes,Route,Link} from "react-router-dom"
const App = () => {


  return (
     <>
          <BrowserRouter>

           <AuthProvider>
            <Routes>
               
              <Route path="/" element={<Landing />} ></Route>
              <Route path="/categories" element={<Categories/>} ></Route>
              <Route path="/cart" element={<Cart/>} ></Route>
              <Route path="/post" element={<Post/>} ></Route>
              <Route path="/searched" element={<Searched />} ></Route>
              <Route path="/bill" element={<Bill/>} ></Route>
              <Route path="/reviewer" element={<Reviewer/>} ></Route>
              <Route path="/liked" element={<Liked/>} ></Route>
              <Route path="/login" element={<LogReg/>} ></Route>
              <Route path="/order" element={<Order/>} ></Route>
              <Route path="/account" element={<Account/>} ></Route>
             
            </Routes>
             
           </AuthProvider>
          </BrowserRouter>
     </>
  )
}

export default App