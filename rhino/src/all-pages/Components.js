import React , {useState} from 'react'
import Star from './Stars'

export let Filter =()=>{
   return(
   <>
   <div className="filter-widget">
     <div className="filter-inputs">
        <input placeholder="0" type="text" className="filter-inp"/>
        <input placeholder="20 000" type="text" className="filter-inp"/>
     </div>
     <div className="desc">
          <h1>
             >Price Range
          </h1>
     </div>
   </div>  

   </>
   )
}

export let Taka =(props)=>{
   console.log(props.white)
	return(
           <div className={"taka"+" " +props.num}>
           	 <img src={props.white?"images/taka-white.png":"images/taka.png"} alt="" className="tkimg"/>
           	 <h1 className="tknum" >{props.taka}</h1>
           </div>
	)
}
export let Stars2 =(props)=>{
	return(
           <div className="stars">
           	<img src="images/star-brown-filled.svg" alt="" className="star"/>
           	<img src="images/star-brown-filled.svg" alt="" className="star"/>
           	<img src="images/star-brown-filled.svg" alt="" className="star"/>
           	<img src="images/star-brown.svg" alt="" className="star"/>
           	<img src="images/star-brown.svg" alt="" className="star"/>
           </div>
	)


}

export let Stars =({setStar})=>{
	let [stars,setStars]=useState(0)
   
	return(
           <div onChange={setStar(stars)} className="stars">
           	<img onClick={()=>setStars(1)} src={stars>0?"images/star-brown-filled.svg":"images/star-brown.svg"} alt="" className="star"/>
           	<img onClick={()=>setStars(2)} src={stars>1?"images/star-brown-filled.svg":"images/star-brown.svg"} alt="" className="star"/>
           	<img onClick={()=>setStars(3)} src={stars>2?"images/star-brown-filled.svg":"images/star-brown.svg"} alt="" className="star"/>
           	<img onClick={()=>setStars(4)} src={stars>3?"images/star-brown-filled.svg":"images/star-brown.svg"} alt="" className="star"/>
           	<img onClick={()=>setStars(5)} src={stars>4?"images/star-brown-filled.svg":"images/star-brown.svg"} alt="" className="star"/>
           	
           </div>
	)


}
export let FixedStars =()=>{
   let [stars,setStars]=useState(0)
   
   return(
           <div  className="stars">
            <img onClick={()=>setStars(1)} src={stars>0?"images/star-brown-filled.svg":"images/star-brown.svg"} alt="" className="star"/>
            <img onClick={()=>setStars(2)} src={stars>1?"images/star-brown-filled.svg":"images/star-brown.svg"} alt="" className="star"/>
            <img onClick={()=>setStars(3)} src={stars>2?"images/star-brown-filled.svg":"images/star-brown.svg"} alt="" className="star"/>
            <img onClick={()=>setStars(4)} src={stars>3?"images/star-brown-filled.svg":"images/star-brown.svg"} alt="" className="star"/>
            <img onClick={()=>setStars(5)} src={stars>4?"images/star-brown-filled.svg":"images/star-brown.svg"} alt="" className="star"/>
            
           </div>
   )


}

export let Item = (props)=>{
	let [liked,setLiked]=useState(false)
   let url = 'http://127.0.0.1:8000'
	return(
           <div className="item-cont" >
	         <div className="item">
               <div className="image">
                  <img src={`${url}${props.data.image}`} alt=""/>
               </div>
               <div className="title">
                  <h1>{props.data.name}</h1>
               </div>
                             
               <Taka num={"one"} taka={props.data.price} ></Taka>
               <div onClick={()=>setLiked(true)} className="like">
                <img  src={liked?"images/liked.svg":"images/like.png"} alt=""/>
               </div>
                              		
               
             </div>
 
             <div className="hoverer" >             	
             	<div className="cont">
             	    <div className="content">
             		<h1>Add to Cart</h1>
             		<div className="imgs">
             			<img src="images/grocery-cart.png" alt=""/>
             			<img className="plus" src="images/plus.svg" alt=""/>
             		</div>
             		
             	    	
             	    </div>
             	    <div className="purple-line">
             	    	
             	    </div>
             	</div>
             </div>

                              
		    </div>
	)
}
