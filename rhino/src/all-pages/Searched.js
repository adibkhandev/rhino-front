import React,{useContext} from 'react'
import Nav from './Nav'
import {Link} from "react-router-dom"
import {Taka,FixedStars,Filter} from "./Components"
import Like from './Like'
import Context from './Context'
const  Searched = () => {
	let context = useContext(Context)
	let results = context.search_result
	let loading = context.loading
	console.log(results,'achieved')
	return (
		<>
        <div className="searched-page">
        	<Nav stick={true} ase={true} searchon={true} visible={true} colour={'ash'}></Nav>
         
         
         	    
         {
         	!loading?
              <Results results={results} > </Results>
              :
              <h1>loading</h1>
         }        
         	
        </div> 
		</>
	)
}
const Results=({results})=>{
	console.log(results,'got')
	
	return(
		<>
		  
		  <div className="all">
		   <Filter></Filter> 
	       <div className="cards">

	       	  {results?results.map((result)=>{
	       	  	return(
	       	  <Link to="/post" state={result} >
                   <Card result={result} ></Card>
	       	  	
	       	  </Link>
	       	  	)
	       	  }):'hi'}
	       </div>	
		  	
		  </div>
		</>
      
	)
}
const Card =({result})=>{
	let url2 = 'http://127.0.0.1:8000'
	return(
        <>
            <div className="card">
                   	<img className="card-img" src={`${url2+result.image}`} alt=""/>
                   	<h1 className="title">
                   		{result.name}
                   	</h1>
                   	<Taka num={"minier"} taka={result.price}  ></Taka>
                   	<FixedStars></FixedStars>
                   	<div className="cart-like">
                   		<h1>Add tocart</h1>
                         <Like id={result.id} ></Like>
                   	</div>
            </div>
        </>
	)
}

export default  Searched