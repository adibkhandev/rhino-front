import React,{useState,useEffect,useContext} from 'react'
import {Link} from "react-router-dom"
import Taka from './Components'
import axios from 'axios'
import Context from './Context'

const Nav = (props) => {
	let [searchon,setSearchon] = useState(true)
	let list = [0,1,2]
     let context = useContext(Context)
     let data = context.user
     let setSearch = context.setsearch
     console.log(context,'ccc')
     console.log(data,'d')
	return (

		<>
		
		

		<div  id={props.stick?"":"non-stick"} className={props.visible?"nav-contain ":props.binary===1?"nav-contain inactive":props.binary===0?"nav-contain active":"nav-contain lost"}>
			
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
            	
            {/*search engine*/}
        
            	<SeachEngine  setSearch={setSearch} ></SeachEngine>

            {/**/}
            </div>
            <div className="icon-nav">
               
            	<div className="icon-conts">
            	 <Link to={"/login"} >
               	    <img src={`images/account-${props.colour}.png`} alt=""/>
                 </Link>
            	
            	</div>
            	<div className="icon-conts">
            
                <Link to={context.user?"/liked":"/login"} >
            	  <img src={`images/love-${props.colour}.png`} alt=""/>
                </Link>
            	</div>
            	<div className="icon-conts">
            	<Link to={context.user?"/cart":"/login"} >
            	 <img src={`images/shopping-bag-${props.colour}.png`} alt=""/>
            	 </Link>
            	</div>
            </div>


		</div>
			

		
		</>
	)
}

let SeachEngine = ({setSearch}) =>{
	let url = 'http://127.0.0.1:8000/search/'
	let [searchtext,setSearchtext]=useState('')
	// let handleSubmit=()=>{
	// 	axios.post((url),{searched:searchtext})
	// 		.then((response)=>{
	// 		   	console.log(response.data)
     //                setSearch(response.data)
                  
     //           })   
	// 	     .catch((err)=>{
	// 	     	console.log('hi')
     //              console.log(err)
	// 	     })
			
	// }
	let handleSubmit =()=>{
		setSearch(searchtext)
	}
	return(
         <>
         <input onChange={(e)=>setSearchtext(e.target.value)} placeholder="Search for products" value={searchtext} type="text" className="searcher-inp"/>
            	<div className="submit">
            		<Link to="/searched">
            		<button onClick={handleSubmit}>
            	     <img src="images/search-ash.png" alt=""/>
            		</button>
            		</Link>
            	</div>
         </>
	)
}

export default Nav