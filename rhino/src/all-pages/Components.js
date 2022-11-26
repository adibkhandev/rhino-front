import React from 'react'


export let Taka =(props)=>{
	return(
           <div className={"taka"+" " +props.num}>
           	 <img src="images/taka.png" alt="" className="tkimg"/>
           	 <h1 className="tknum" >{props.taka}</h1>
           </div>
	)
}
export let Stars =(props)=>{
	return(
           <div className="stars">
           	<img src="images/favourite.png" alt="" className="star"/>
           	<img src="images/favourite.png" alt="" className="star"/>
           	<img src="images/favourite.png" alt="" className="star"/>
           	<img src="images/favourite.png" alt="" className="star"/>
           	<img src="images/favourite.png" alt="" className="star"/>
           </div>
	)
}
