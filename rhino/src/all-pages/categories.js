import React from 'react'
import Nav from './Nav'
const Categories = () => {
	return (
        <div className="whole-page-cat">
        	<Nav colour={"ash"} visible={true} stick={false} ></Nav>
        	<Content></Content>
        </div>
	)
}
const Content =()=>{
	

	return(
   <div className="content-cont">
      	
     <div className="top">
      <div className="aside">
      	<div className="first-row">
      	   <div id="box-1" className="boxes">
             <img src="images/gojo.jpg" alt=""/>
              <h1>ANIME GOODS</h1>
           </div>	
           <div id="box-2" className="boxes">
            <img src="images/garo.jpg" alt=""/>
            <h1>MANGA</h1>
           </div>
      	</div>
      	   

           <div className="second-row">
           	<div id="box-3" className="boxes">
            <img src="images/asta.jpg" alt=""/>
            <h1>NOVEL</h1>
           </div>
           </div>

      </div>
      <div className="right-side">
      	<div id="box-4" className="boxes">
             <img src="images/dabi.jpg" alt=""/>
             <h1>LAMPS</h1>
         </div>
      </div>
            
      </div>
        
        
        
        <div className="bottom">
        	<div id="box-5" className="boxes">
         <img src="images/kaneki.jpg" alt=""/>
         <h1>ACCESSORIES</h1>
        </div>
        <div id="box-6" className="boxes">
         <img src="images/tanjiro.jpg" alt=""/>
         <h1>ACTION FIGURES</h1>
        </div>
        </div>
    </div>
      
	)
}

export default Categories