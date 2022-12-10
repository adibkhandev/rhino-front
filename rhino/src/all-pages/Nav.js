import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import Taka from './Components'

const Nav = (props) => {
	let [searchon,setSearchon] = useState(true)
	let list = [0,1,2]

	return (

		<>
		
		

		<div id={props.stick?"":"non-stick"} className={props.visible?"nav-contain":"nav-contain lost"}>
			
			<div className="rhino-logo">
			     <Link to="/"></Link>
				<img  src={`images/rhino-logo-${props.colour}.png`} alt="" className="rhino">
                        
				</img>

				
			</div>
            
            <div className={searchon?"nav-text":"nav-text lefted"}>
            	<h1 className={`texters + ${props.colour}`}>About</h1>
            	<Link to="/categories" >
            		<h1 className={`texters + ${props.colour}`}>Categories</h1>
            	</Link>
            	
            	<h1 className={`texters + ${props.colour}`}>Explore</h1>
            </div>
            <div id={props.ase?"":"less"} className={props.searchon?"searcher appear":"searcher none"}>
            	<input placeholder="Search for products" type="text" className="searcher-inp"/>
            	<div className="submit">
            		<Link to="/searched">
            		<button>
            	     <img src="images/search-ash.png" alt=""/>
            		</button>
            		</Link>
            	</div>
            </div>
            <div className="icon-nav">
               
            	<div className="icon-conts">
            	 <Link to="/login" >
               	    <img src={`images/account-${props.colour}.png`} alt=""/>
                 </Link>
            	
            	</div>
            	<div className="icon-conts">
                <Link to="/liked" >
            	  <img src={`images/love-${props.colour}.png`} alt=""/>
                </Link>
            	</div>
            	<div className="icon-conts">
            	<Link to="/cart" >
            	 <img src={`images/shopping-bag-${props.colour}.png`} alt=""/>
            	 </Link>
            	</div>
            </div>


		</div>
			

		
		</>
	)
}

export default Nav