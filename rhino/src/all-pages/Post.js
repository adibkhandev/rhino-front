import React,{useState,useEffect} from 'react'
import { useId } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {useLocation} from 'react-router-dom'
import {Link} from "react-router-dom"
import axios from 'axios'
const Post =(props)=>{
	let store = useSelector((state)=> state.data)
	let [open,setOpen]=useState(false)
	console.log('hello')
	console.log(store)
	let location = useLocation()
	let data = location.state
	console.log(data)
	return(
		<div className="post-page">
			<MainPost open={open} data={data} ></MainPost>
			<WriteReview  data={data} ></WriteReview>
			<ReviewSlide open={open} setOpen={setOpen} data={data}></ReviewSlide>
		</div>
    
	)
}
const MainPost = ({data,open}) => {
	let [count,setCount]=useState(1)
	let url2 = 'http://127.0.0.1:8000'
	let dispatch = useDispatch()
	let cartid = useId()
    console.log("post",data)
	return (
		     <>
			   <div className={open?"post reve":"post revless"}>
			   	
			   
				<div className="picture">
					<img src={`${url2}${data.image}`} alt="" className="post-image"/>
				</div>
				<div className="text">
				     <div className="described">
				     	<h1 className="title">
						 {data.name}
					    </h1>
					    <h1 className="story">
						 {data.story}
					    </h1>
					    <div className="price">
						  <img src="images/taka.png" alt=""/>
						  <h1 className="price">{data.price}</h1>
					    </div>
				     </div>
					
					
					
					<div className="buttons">
						<div className="add">
						<Link to='/cart'>
						 <button  onClick={() => dispatch({ id:cartid , type: 'ADD' , payload:data ,count:count})}  className="add">
							Add to cart
						 </button>
							
						</Link>
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


const WriteReview=({data})=>{

	return(
       <>
       <Link to="/reviewer" state={data} >
       <div className="review-container">
       	<img src="images/edit.png" alt="" className="review-image"/>
       </div>
       </Link>
       </>
	)
}
const ReviewSlide=({data,open,setOpen})=>{
	let [reviews,setReviews] = useState()
	console.log(open,'open')
	let [available,setAvailable] = useState(0)
    
	return(
<>

	<div className={available===0?"semi-circle-1-active":"semi-circle-1-inactive"}>
		
	</div>
	<div onClick={()=>{{
		setAvailable(1)
		setOpen(true)
	}}} className={available===0?'semi-circle-2-active':'semi-circle-2-inactive'}>
		
	</div>
	<h1 className={available===0?"review-title-active":"review-title-inactive"}>
		  Reviews
	</h1>
	<div onClick={()=>{{
		setAvailable(0)
		setOpen(false)
	}}} className={available===1?'reviewer':'reviewer close'}>

	    <div className="rev-title">
	    	Reviews
	    </div>
	    <div className="reviews">
		{data.rev.map((data)=>{
			return(
               <Review data={data} ></Review>
			)
		})}
	    	
	    </div>
	</div>
	
</>
	)
}

const Review = ({data}) =>{
	let [images,setImages] = useState(null)
	let url = 'http://127.0.0.1:8000/review/images/'
	let base_url = 'http://127.0.0.1:8000'
    console.log(data.id,'idd')
    useEffect(() => {
    	axios.post(url,{'id':data.id})
    	.then((response)=>{
            console.log(response.data,'RES')
            setImages(response.data)
    	})
    	.catch((err)=>{
    		console.log(err)

    	})
    }, [])
	return(
      <div className="container-rev">
      	<div className="pfp">
      		<img src="images/pfp.jpg" alt=""/>
      	</div>
      	<div className="data">
      		<div className="namerate">
      			<h1 className="creater_name">
      				{data.creater_name}
      			</h1>
      			<div className="rating">
      				<h1>{data.rating}/5</h1>
      				<img src="images/star.svg" alt=""/>
      			</div>
      		</div>
      		<div className="writing">
      			{data.review}
      		</div>
      		<div className="images">
      			{images?images.map((image)=>{
      				return(
      					<div className="rev_image_cont">
      						
      					<img className='rev_images' src={`${base_url}${image.image}`} alt=""/>
      					</div>
      				)
      			})
      		    :
      		    "hi"
      		}
      		</div>
      	</div>

      </div>
	)
}

export default Post