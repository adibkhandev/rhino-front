import React from 'react'
import Navigation from './Navigation-ash'
import {Taka} from "./Components"
const Bill = () => {
	let list = [0,1,2,3]
	return (
		<>
		<Navigation colour={"ash"} > </Navigation>
		<div className="bill-page" >
		 
		 <div className="content">
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
                              		<Taka num={"mini"} taka={"220"} ></Taka>
                              		<div className="counter">
                              		    <img src="images/arrow-icon.png" alt="" className="arrow left"/>
                              			<h1 className="count">1</h1>
                              			<img src="images/arrow-icon.png" alt="" className="arrow right"/>
                              		</div>
                              		
                              		<Taka num={"mini"} taka={"1220"} ></Taka>
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
		 <button className="checkout-btn">
		 	Confirm Order
		 </button>
		</div>
		</>
	)
}

export default Bill


