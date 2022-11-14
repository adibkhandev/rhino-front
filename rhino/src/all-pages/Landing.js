import react from 'react'
import Navigation from './Navigation'
import '../sass/main.scss'
let Landing =()=>{
  
  return(
    <>
       <div className="page1" style={
        {
          background: "url('images/b%26wcarousel-background-p1.jpg')",
          backgroundRepeat : 'no-repeat',
          backgroundSize:'cover'
        }
       }>
           <Navigation>
         
           </Navigation>
           <div className="hero-section">
           <div className="parts" id="part1">
             <Heading>
         
           </Heading>
           </div>
           <div className="parts" id="part2">
             <Popup>
         
           </Popup>
           </div>
             
           
           </div>
           
           <Scrolldown>
         
           </Scrolldown>

       </div>
 
       
    </>
  )
}
let Scrolldown = ()=>{
  
  return(
    <>
      <button className="arrow-down-button">
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
