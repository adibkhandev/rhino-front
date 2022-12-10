import React from 'react'
import Nav from './Nav'
import {Taka,Stars,Like,Filter} from "./Components"
const  Searched = () => {
	return (
		<>
        <div className="searched-page">
        	<Nav stick={true} ase={true} searchon={true} visible={true} colour={'ash'}></Nav>
         
         
         	    
        
         <Results>
         	
         </Results>
        </div> 
		</>
	)
}
const Results=()=>{
	let results = [0,1,2,3,4,5,6,7,8,9,10,11,8,9,10,11,0,1,2,1]
	return(
		<>
		  
		  <div className="all">
		   <Filter></Filter> 
	       <div className="cards">
	       	  {results.map((result)=>{
	       	  	return(
                   <div className="card">
                   	<img className="card-img" src="images/product6.jpg" alt=""/>
                   	<h1 className="title">
                   		Shingeki No Kyojin Vol.14
                   	</h1>
                   	<Taka num={"minier"} taka={"220"}  ></Taka>
                   	<Stars></Stars>
                   	<div className="cart-like">
                   		<h1>Add tocart</h1>
                        <Like></Like>
                   	</div>
                   </div>
	       	  	)
	       	  })}
	       </div>	
		  	
		  </div>
		</>
      
	)
}

export default  Searched