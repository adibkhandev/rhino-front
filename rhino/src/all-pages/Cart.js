import React from 'react'
import Navigation from './Navigation-ash' 
import Nav from './Nav'
import {Taka,Counter} from "./Components"
import {Link} from "react-router-dom"
const Cart = () => {
	let list = [0,1,2]
	return (
		
			<div className="cart-page">
			<Nav colour={"ash"} visible={true} stick={false} ></Nav>
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
                              		<Counter></Counter>
                              		
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
				   <Link to="/bill">
				<button className="buy-but">
				   	Buy
					
				</button>
				   </Link>
               
			</div>
		</div>
		
		
		
		
	)
}

export default Cart