import React from 'react'
import Navigation from './Navigation-ash' 
import {Taka} from "./Components"
const Cart = () => {
	let list = [0,1,2]
	return (
		
			<div className="cart-page">
			<Navigation colour={"ash"} />
			<div className="cart">
				<div className="desc">
					<div className="cover">
						<h1>Cover</h1>
					</div>
					<div className="Product">
						<h1>Product</h1>
					</div>
					<div className="triplet">
						<h1 className="trips">Price</h1>
						<h1 className="trips">Quantity</h1>
						<h1 className="trips">Subtotal</h1>
					</div>
				</div>
				<div className="items">
					{list.map((list)=>{
						return(
                              <div className="item">
                              	<div className="image">
                              	 <img src="images/aot.jpg" alt=""/>
                              	</div>
                              	<div className="title">
                              		<h1>Attack on titan Vol. 1</h1>
                              	</div>
                              	<div className="trio">
                              		<Taka num={"one"} taka={"220"} ></Taka>
                              		<div className="counter">
                              		    <img src="images/arrow-icon.png" alt="" className="arrow left"/>
                              			<h1 >1</h1>
                              			<img src="images/arrow-icon.png" alt="" className="arrow right"/>
                              		</div>
                              		
                              		<Taka num={"one"} taka={"1220"} ></Taka>
                              	</div>
                              </div>
						)
					})}
				</div>
				<div className="net">
					<h1 className="net-header" >Net total  :</h1>
					<Taka  num={"zero"} taka={"2200"} ></Taka>
				</div>
               
			</div>
		</div>
		
		
		
		
	)
}

export default Cart