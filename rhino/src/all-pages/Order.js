import React from 'react'
import Nav from './Nav'
import {Taka,Counter} from "./Components"
const Order = () => {
	let orderDetails = [0,1,2,3,4,5]
       let active = true
	return (
		<>
           <div className="order-page">
            <Nav colour={"ash"} visible={true} stick={false} ></Nav>
           	 <div className="orders">
           	 	{orderDetails.map((orders,i)=>{
           	 		return(
           	 		  <div className="order">
                              <div className={active&&i===0?"item purpled":"item ash"}>
                              	<div className="image">
                              	 <img src="images/aot.jpg" alt=""/>
                              	</div>
                              	<div className="title">
                              		<h1>Attack on titan Vol. 1</h1>
                              	</div>
                              	<div className="trio">
                              		<Taka num={"zero"} taka={"220"} ></Taka>
                              		<Counter fixed={true} count={1}></Counter>
                              		
                              		<Taka num={"zero"} taka={"1220"} ></Taka>
                              	</div>
                              </div>
                              <div className={active&&i===0?"deliver purpled":"deliver ash"}>
                                   	
                                   <div className="center">
                                   <div className="deliver-time">
                                   	<h1 className="info-title">Order Delivey :</h1>
                                   	<h1 className="time" > Tommorow </h1>
                                   </div>
                              	<div className="order-time">
                              		<h1 className="info-title">Order Placed  :</h1>
                                   	<h1 className="time" > 3d ago </h1>
                              	</div>
                                   </div>

                              </div>
           	 		  	
           	 		  </div>	
           	 		)
           	 	})}
           	 </div>
           </div>
		</>
	)
}

export default Order