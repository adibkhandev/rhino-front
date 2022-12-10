import React , {useState} from 'react'
import Star from './Stars'
export let Counter=(props)=>{
   console.log(props)
   let [count,setCount]=useState(1)
   if(props.fixed){
      return(
         <div className="counter">
       <h1 >{`${props.count}`}</h1>
            
         </div>
       )
   }
   return(
      <>
     <div className="counter">
      <img onClick={()=>setCount(count-1)} src="images/arrow-icon.png" alt="" className="arrow left"/>
       <h1 >{`${count}`}</h1>
      <img onClick={()=>setCount(count+1)} src="images/arrow-icon.png" alt="" className="arrow right"/>
     </div>
     </>    
   )
}
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
	return(
           <div className={"taka"+" " +props.num}>
           	 <img src="images/taka.png" alt="" className="tkimg"/>
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

export let Stars =(props)=>{
	let [stars,setStars]=useState(0)
	return(
           <div className="stars">
           	<img onClick={()=>setStars(1)} src={stars>0?"images/star-brown-filled.svg":"images/star-brown.svg"} alt="" className="star"/>
           	<img onClick={()=>setStars(2)} src={stars>1?"images/star-brown-filled.svg":"images/star-brown.svg"} alt="" className="star"/>
           	<img onClick={()=>setStars(3)} src={stars>2?"images/star-brown-filled.svg":"images/star-brown.svg"} alt="" className="star"/>
           	<img onClick={()=>setStars(4)} src={stars>3?"images/star-brown-filled.svg":"images/star-brown.svg"} alt="" className="star"/>
           	<img onClick={()=>setStars(5)} src={stars>4?"images/star-brown-filled.svg":"images/star-brown.svg"} alt="" className="star"/>
           	
           </div>
	)


}
export let Like =()=>{
   let [like,setLike]= useState(false)
   return(
      <div onClick={()=>{
             if(like){
             setLike(false)
             }
             else{
               setLike(true)
             }

          }} className="like">
         <img  src={like?"images/liked.svg":"images/like.png"} alt=""/>
      </div>
   )
}
export let Item = (props)=>{
	let [liked,setLiked]=useState(false)

	return(
           <div className="item-cont" >
	         <div className="item">
               <div className="image">
                  <img src="images/aot.jpg" alt=""/>
               </div>
               <div className="title">
                  <h1>Attack on titan Vol. 1</h1>
               </div>
                             
               <Taka num={"one"} taka={"220"} ></Taka>
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
