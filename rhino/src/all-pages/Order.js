import React,{useState,useEffect,useContext} from 'react'

import Nav from './Nav'
import Ordercomp from './Ordercomp'
import axios from 'axios'
import {Taka} from "./Components"
import Counter from './Counter'
import Context from './Context'
const Order = () => {
let url = 'http://127.0.0.1:8000/ordered/'
let context = useContext(Context)
let userid = 28
let [orderedData,setOrderedData] = useState()
useEffect(() => {
     if(userid){
     axios.post(url,{"userid":userid})
       .then((response)=>{
          console.log(response.data)
          let itemArray = response.data.slice().reverse().map((data)=>{
               return(
                  data
               )
          })
          setOrderedData(response.data.slice().reverse())
          console.log(orderedData)
       })
       .catch((err)=>{
          console.log(err)
       })
    }
     else{
          console.log('unauthorized')
     }
}, [])

       let active = true
       console.log('t')
	return (
		<>
           <div className="order-page">
            <Nav colour={"ash"} visible={true} stick={false} ></Nav>
           	 <div className="orders">

           	 	{orderedData?orderedData.map((orders,i)=>{
                        return(
                           <Ordercomp data={orders} ></Ordercomp>
                         )             
                    }  
           	)
               : <h1>hi</h1>
               }
           	 </div>
           </div>
		</>
	)
}

export default Order