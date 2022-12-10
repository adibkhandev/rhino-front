import React,{useState} from 'react'
import {Link} from "react-router-dom"
let array = [0,1,2,3] 
const MostPopular = () => {
	
	return (
		<div className="page3">
			<div className="description">
				<h1 className="heading">Most Popular</h1>
				<h1 className="discon">Discount on</h1>
				<h1 className="subheading">Manga Light novels and all</h1>
				<div className="but-con">
					<button className="callToaction">Shop Now</button>
				</div>
				
			</div>
			
			<div className="populars">
			        {array.map((item)=>{
			        	return(
                         <Link to="./post" >
					      <div className="card">
						      <img src="images/aot.jpg" alt="" className="card-image"/>
						      <h1 className="card-title">Attack on Titan Vol. 1</h1>
						      <div className="price">
						       <img src="images/taka.png" alt="" className="price-icon"/>
						       <h1 className="card-price">280</h1>
						      </div>
						
					      </div>
				   	
				         </Link>
			        	)
			        })}
				  
					

					
				</div>
			
		</div>
	)
}

export default MostPopular