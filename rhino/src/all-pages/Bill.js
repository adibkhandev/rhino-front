import React,{useState} from 'react'
import Navigation from './Navigation-ash'
import {Link} from "react-router-dom"
import Nav from './Nav'
import {Taka,Counter} from "./Components"
const Bill = () => {
	let list = [0,1,2,3]
	let [billed,setBilled]=useState(false)
	return (
		<>
		<div className="total-bill">
			
		<div   className={billed?"int-bill off":"int-bill"  }>
		        	<Nav colour={"ash"} visible={true} stick={false} ></Nav>
		<div className="bill-page" >
		 
		 <div onClick={()=>setBilled(false)} className="content">
			 <div className="bill">
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
                              		<Taka num={"minier"} taka={"220"} ></Taka>
                              		<Counter></Counter>
                              		
                              		<Taka num={"minier"} taka={"1220"} ></Taka>
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
			<div className="details">
				<div className="adressed">
					<h1 className="ship-1">Shipping Adress :</h1>
					<h1 className="ship-2">4,road 8,banasree,rampura,dhaka</h1>
				</div>
				<div className="delivery-time">
					<h1 className="time-1">
						Estimated delivery time :
					</h1>
					<h1 className="time-2">
						4D-5D
					</h1>
				</div>
				<div className="cont">
					<div className="bill-sec">
						<div className="heading">
							<h1>
								Bill
							</h1>
						</div>
						<div className="titles">
							  <div className="title">
							  <div className="joined">
							 	<h1 className="header">
							    	Subtotal
							     </h1>
						         <h1 className="colon">
								  :
							     </h1>
							  	
							     </div>
                                  <Taka num={"mini"} taka={"220"} ></Taka>							  
                                 </div>

							   <div className="title">
							   <div className="joined">
								 <h1 className="header">
							    	Delivery fee
							     </h1>
						         <h1 className="colon">
								  :
							     </h1>
							   	
							    </div>
							    <Taka num={"mini"} taka={"220"} ></Taka>
							  </div>
							   <div className="title">
							   <div className="joined">
								 <h1 className="header">
							    	Vat
							     </h1>
						         <h1 className="colon">
								  :
							     </h1>
							   	
							    </div>
							    <Taka num={"mini"} taka={"220"} ></Taka>
							  </div>
							   <div className="title">
							   <div className="joined">
								 <h1 className="header">
							    	Total
							     </h1>
						         <h1 className="colon">
								  :
							     </h1>
							   	
							    </div>
							    <Taka num={"mini"} taka={"220"} ></Taka>
							  </div>
						</div>
					</div>
					<div className="payment-method">
						<h1 className="heading">
							Payment method
						</h1>
						<div className="radios">
						 <div className="radio">
							<input type="radio" id="Cash" className="radio"/>
							<label for="Cash">Cash on delivery</label>
						 </div>
						 <div className="radio">
							<input type="radio" id="Credit" className="radio"/>
							<label for="Credit">Credit Card</label>
						 </div>
						 <div className="radio">
							<input type="radio" id="Bkash" className="radio"/>
							<label for="Bkash">Bkash Send Money</label>
						 </div>	
						</div>
					</div>
				</div>
			</div>
		 </div>
		 <button onClick={()=>setBilled(true)} className="checkout-btn">
		 	Confirm Order
		 </button>
		</div>
			
		</div>

		<div className={billed?"ext-bill":"poof"}>
			<img src="images/order-cover.jpg" alt=""/>
			<div className="parts-ext">
				<h1>Your order has been placed .</h1>
			<div className="buttonS">
			<button id="btn-explore" >
				Explore more
			</button>
			<Link to="/order" >
			<button id="btn-order">
				Order list
			</button>
				
			</Link>
				
			</div>
			</div>
				
			
		</div>
		</div>
		</>
	)
}

export default Bill


