import React from 'react'
import {Taka} from "./Components"
import Counter from './Counter'


const Ordercomp = ({count,active}) => {
	return (
		<div>
		                 <div className="order">
                              <div className={`${"item"} ${active? "purpled":"ash"}`}>
                                   <div className="image">
                                    <img src="images/aot.jpg" alt=""/>
                                   </div>
                                   <div className="title">
                                        <h1>Attack on titan Vol. 1</h1>
                                   </div>
                                   <div className="trio">
                                        <Taka white={active} num={"zero"} taka={"220"} ></Taka>
                                        <Counter white={active} fixed={true} count={count}></Counter>
                                        
                                        <Taka white={active} num={"zero"} taka={"1220"} ></Taka>
                                   </div>
                              </div>
                              <div className={`${"deliver"} ${active? "purpled":"ash"}`}>
                                        
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
		</div>
	)
}

export default Ordercomp