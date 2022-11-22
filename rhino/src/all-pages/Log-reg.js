import React,{useState} from 'react'
import Navigation from './Navigation-ash'

const LogReg = () => {
	let [logreg,setLogreg]=useState(0)
	let func = ()=>{
		setLogreg(1)
	}
	let funcback = ()=>{
		setLogreg(0)
	}
	return (
	
			<div id="logregpage" className={logreg===0?"login-reg-cont":"login-reg-cont-active"} >
			 <Log binary={logreg} func={func} />
			 <Reg binary={logreg} func={funcback} />
			 <img src="images/luffy.png" alt="" className={logreg===0?"luffy-1":"luffy-1-active"}/>
			 <img src="images/luffy.png" alt="" className={logreg===1?"luffy-2":"luffy-2-active"}/>
			</div>


		
	)
}
const Log = (props) => {
	
    return(
       <div className="login-background">
       <Navigation binary={props.binary} colour={"white"} />
       	
       	       	<div className={props.binary===0?"inputs":"inputs gone"}>
       		<h1 className="headline">
       			Create your Acoount.
       		</h1>
       		<div className="twin">
       		  <input placeholder="First Name" type="text" className="inp-log"/>
       		  <input placeholder="Last Name" type="text" className="inp-log"/>
       		</div>

             <input  placeholder="Phone number" type="number" className="phone"/>
             <input  placeholder="Email" type="text" className="email"/>
             <input  placeholder="Adress" type="text" className="adress"/>
             <div className="but">
             	<button onClick={props.func} >Create Account</button>
             </div>
       	</div>
       </div>
    )	
}
const Reg = (props) => {

	if (props.binary===0){
    return(

       <div className="reg-background">
       <Navigation binary={1} colour={"white"} />
           <div className="login-inputs gone">
       		 <h1 className="headline">
       			Log in your account. 
       		 </h1>
       	

             
             <input  placeholder="Email" type="text" className="email"/>
              <input  placeholder="Enter password" type="text" className="password"/>
            
             <div className="but">
             	<button onClick={props.func} >Login</button>
             </div>
           </div>
         </div>  
    )	
 }
   else {
    return(

       <div className="reg-background">
       <Navigation  binary={0} colour={"white"} />
       	<div className="login-inputs">
       		 <h1 className="headline">
       			Log in your account. 
       		 </h1>
       	

             
             <input  placeholder="Email" type="text" className="email"/>
              <input  placeholder="Enter password" type="text" className="password"/>
            
             <div className="but">
             	<button onClick={props.func} >Login</button>
             </div>
           </div>
        
       </div>
    )	
 }
}



export default LogReg