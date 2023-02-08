import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Navigation from './Navigation-ash' 
import Nav from './Nav'
import {Taka} from "./Components"
import Counter from './Counter'
import {Link} from "react-router-dom"
const Cart = () => {
	let url2 = 'http://127.0.0.1:8000'
	let data = useSelector((state)=> state.data)
	let dispatch = useDispatch()
	let dispatcher = () => {
		dispatch({type:"ADD"})
	}
	console.log('hello')
	console.log(data)
	console.log('unique')
	let list = [0,1,2]
	return (
		
			<div className="cart-page">
			<Nav colour={"ash"} visible={true} stick={false} ></Nav>
			<div className="cart">
				<div className="desc">
					<div className="cover">
						<h1 >Cover</h1>
					</div>
					<div className="Product">
						<h1 >Product</h1>
					</div>
					<div className="triplet">
						<h1 className="trips">Price</h1>
						<h1 className="trips">Quantity</h1>
						<h1 className="trips">Subtotal</h1>
					</div>
				</div>
				<div className="items">
					{data?data.map((items,i)=>{
						console.log("fuck",items.id)
						return(
                              <div className="item">
                              	<div className="image">
                              	 <img src={`${url2}${items.product.image}`} alt=""/>
                              	</div>
                              	<div className="title">
                              		<h1>{items.product.name}</h1>
                              	</div>
                              	<div className="trio">
                              		<Taka num={"one"} taka={items.product.price} ></Taka>
                              		<Counter id={i} count={items.count} ></Counter>
                              		
                              		<Taka num={"one"} taka={items.product.price} ></Taka>
                              	</div>
                              	<div onClick={()=>dispatch({type:'DELETE',payload:items})} className="remover">
                              		
                              	</div>
                              </div>
						)
					}):"hi"}
				</div>
				<div className="net">
					<h1 className="net-header" >Net total  :</h1>
					<Taka  num={"zero"} taka={2020} ></Taka>
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