import React,{useState} from 'react'

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
			 <Log func={func} />
			 <Reg func={funcback} />
			 <img src="images/luffy.png" alt="" className={logreg===0?"luffy-1":"luffy-1-active"}/>
			 <img src="images/luffy.png" alt="" className={logreg===1?"luffy-2":"luffy-2-active"}/>
			</div>


		
	)
}
const Log = (props) => {
	console.log(props.func)
    return(
       <div className="login-background">
       	<button onClick={props.func}  >
       		change
       	</button>
       </div>
    )	
}
const Reg = (props) => {
    return(
       <div className="reg-background">
       	<button  onClick={props.func}  >
       		change
       	</button>
       </div>
    )	
}



export default LogReg