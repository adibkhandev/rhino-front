import React,{useState,useEffect,useContext} from 'react'
import {Link} from "react-router-dom"
import axios from 'axios'
import Context from './Context'
let array = [0,1,2,3] 
const MostPopular = ({popular}) => {
    console.log(popular,'prop')
	let image_url = 'http://127.0.0.1:8000/'
	let context = useContext(Context)
	let setResult = context.setresult
	let setLoading = context.setloading
    let resultHandler = () =>{
    	console.log(popular,'pops')
    	setResult(popular)
    	setLoading(false)
    }
	return (
		<div className="page3">
			<div className="description">
				<h1 className="heading">Most Popular</h1>
				<h1 className="discon">Discount on</h1>
				<h1 className="subheading">Manga Light novels and all</h1>
				<div onClick={resultHandler} className="but-con">
				<Link to='/searched' >
					<button className="callToaction">Shop Now</button>
				</Link>
				</div>
					
				
			</div>
			
			<div className="populars">
			        {popular.map((item)=>{
			        	console.log(item.image)
			        	return(
                         <Link to="./post" state={item} >
					      <div className="card">
						      <img src={`${image_url}${item.image}`} alt="" className="card-image"/>
						      <h1 className="card-title">{item.name}</h1>
						      <div className="price">
						       <img src="images/taka.png" alt="" className="price-icon"/>
						       <h1 className="card-price">{item.price}</h1>
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