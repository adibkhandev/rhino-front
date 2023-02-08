import react ,{useState,useEffect,useRef,useContext}from 'react'
import Navigation from './Navigation'
import '../sass/main.scss'
import RunningOut from './RunningOut'
import MostPopular from "./MostPopular"
import Nav from './Nav'
import axios from 'axios'

import {AuthProvider,Context} from './Context'

let Landing = ({setSearch})=>{
 
  let [isout,setIsout] = useState(true)
  let [searchon,setSearchon]= useState(true)
  let local = localStorage.getItem('usertoken')
  console.log(JSON.parse(local),'json')
    let context = useContext(Context)
    console.log(context)
    let usersetter = context.usersetter
    let token = context.token
   
     useEffect(() => {
       if(token){
         console.log(token,'tok')
       }
     }, [token])
  return(
    <>
    <div   className="land">
      <Nav  setSearch={setSearch}  stick={true} ase={true} searchon={searchon?true:false} visible={isout} colour={'white'} ></Nav>
     <Home scrolling={setSearchon} referer={setIsout}  ></Home>
     <RunningOut  ></RunningOut>
     <MostPopular ></MostPopular>
    </div>
     
     </>
  )
}

let Home =(props)=>{
  let [buttonthere,setButtonthere] = useState(true)
  let myref = useRef();

   useEffect(() => {
     
     


    
    return () => {
      let observer = new IntersectionObserver ((entries,options)=>{
        let entry = entries[0];
        props.referer(entry.isIntersecting)
        console.log(entry)

      })
      if(myref.current){
      observer.observe(myref.current)
  }
        }
  }, [])

   let scroller=()=>{
     if(window.scrollY>450){
         setButtonthere(false)
        
     }
     if(window.scrollY<450){
      setButtonthere(true)
     }
   }
   props.scrolling(buttonthere)
   window.addEventListener('scroll',scroller)
  return(
    <>
       <div  className="page1">
         
           <div  ref={myref} className="hero-section">
           <div className="parts" id="part1">
             <Heading>
         
           </Heading>
           </div>
           <div className="parts" id="part2">
             <Popup >
         
           </Popup>
           </div>
             
           
           </div>
           
           <Scrolldown visibility={buttonthere} >
         
           </Scrolldown>

       </div>
 
       
    </>
  )
}
let Scrolldown = (props)=>{
  
  return(
    <>
      <button onClick={()=>{
        window.scroll(0,1000)
      }} className={props.visibility?"arrow-down-button appear" : "arrow-down-button flee"}>
       <img src="images/arrow-icon.png" alt="" className="scrolldown"/>
      </button>
    </> 
  )
}

let Heading=()=>{
  
  return(
        <h1>
          largest 
          <span>manga</span> shop in bangladesh
        </h1>

  )
}
let Popup =()=>{

  return(
      
       <img src="images/mikasa.png" alt="" className="pop-img"/>
      
  )
}

export default Landing;
