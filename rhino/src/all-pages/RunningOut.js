import React from 'react'

const RunningOut = () => {
	return (
		<>
        
		
			<div className="page2">
           <div className="container">
           	 <div className="text-part">
                	 <h1 className="title">
                	      	Eid Sale
           	         </h1>
                	 <h1 className="description">
                	 	     Running out this week
                	 </h1>
                	 <h1 className="name">
           	 	        Solo Leveling Vol. 1
                	 </h1>
           	         <div className="price">
                	   <img src="images/taka.png" alt="" className="taka-icon"/>
           	 	       <h1 className="price-num">
           	 		     280
           	 	       </h1>
           	         </div>
           	         <button className="shop">
           	 	        Shop Now
           	         </button>           		    
           	 </div>
           


           	<div className="images-part">
           		<img  src="images/product-2.jpg" alt="" className="carouselImages"/>
           		<img  src="images/product-2.jpg" alt="" className="carouselImages"/>
           		<img  id="second-image" src="images/product1.jpg" alt="" className="carouselImages"/>
           	</div>
           </div>

           <div className="arrow-buttons">
           	<button id="right"className="arrow-button">
           	 <img src="images/arrow-icon.png" alt=""/>
           	</button>
           	<button id="left"className="arrow-button">
           	 <img src="images/arrow-icon.png" alt=""/>
           	</button>
           </div>
           


           </div>
           
		
           
           </>

	


	)
}

export default RunningOut