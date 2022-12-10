import React,{useState} from 'react'
import {Link} from "react-router-dom"
const Post =()=>{
	return(
		<div className="post-page">
			<MainPost></MainPost>
			<WriteReview></WriteReview>
			<ReviewSlide></ReviewSlide>
		</div>
    
	)
}
const MainPost = () => {
	let [count,setCount]=useState(1)
	return (
		     <>
			   <div className="post">
			   	
			   
				<div className="picture">
					<img src="images/aot.jpg" alt="" className="post-image"/>
				</div>
				<div className="text">
				     <div className="described">
				     	<h1 className="title">
						  Attack on titan Vol.1
					    </h1>
					    <h1 className="story">
						  Once upon a time there lived people in walls peacerfully and everything changed when the titans broke in
					    </h1>
					    <div className="price">
						  <img src="images/taka.png" alt=""/>
						  <h1 className="price">280</h1>
					    </div>
				     </div>
					
					
					
					<div className="buttons">
						<div className="add">
						 <button  className="add">
							Add to cart
						 </button>
					    </div>
					    <div className="count">
					    	<img onClick={()=>{
					    		return(
					    		setCount(count-=1),
					    		console.log(count)
					    		)
					    	}}
					    	 src="images/arrow-icon.png" alt="" className="right"/>
					    	
					    	<h1 className="num">{count}</h1>
					    	
					    	<img onClick={()=>{
					    		return(
					    		setCount(count+=1),
					    		console.log(count)
					    		)
					    	}}  
					    	src="images/arrow-icon.png" alt="" className="left"/>
					    </div>
					</div>
					
				</div>
				</div>
				</>
			
		
	)
}


const WriteReview=()=>{

	return(
       <>
       <Link to="/reviewer" >
       <div className="review-container">
       	<img src="images/edit.png" alt="" className="review-image"/>
       </div>
       </Link>
       </>
	)
}
const ReviewSlide=()=>{
	let [available,setAvailable] = useState(0)
	return(
<>

	<div className={available===0?"semi-circle-1-active":"semi-circle-1-inactive"}>
		
	</div>
	<div onClick={()=>{setAvailable(1)}} className={available===0?'semi-circle-2-active':'semi-circle-2-inactive'}>
		
	</div>
	<h1 className={available===0?"review-title-active":"review-title-inactive"}>
		  Reviews
	</h1>
	<div onClick={()=>{setAvailable(0)}} className={available===1?'reviewer-open':'reviewer-close'}>
		
	</div>
	
</>
	)
}

export default Post