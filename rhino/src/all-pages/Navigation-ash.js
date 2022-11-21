import React from 'react'

const Navigation = (props) => {
  return (
    <>
    <div className="ashnav">
     <div className="logo">
        <img src={`images/rhino-logo-${props.colour}.png`} alt="" className="logoimage"/>
     </div>
     <div className={`textnav-${props.colour}`}>
        <h1 className="nav-but">About</h1>
        <h1 className="nav-but">Categories</h1>
        <h1 className="nav-but">Explore</h1>
      
     </div>
    
     <div className="sidenav">
       <div id="icon-1" className="imgs">
        <img  src={`images/account-${props.colour}.png`} alt="" className="icons"/>
       </div>
       <div className="imgs">
        <img src={`images/love-${props.colour}.png`} alt="" className="icons"/>
       </div>
       <div className="imgs">
         <img src={`images/shopping-bag-${props.colour}.png`} alt="" className="icons"/>
      </div>    
     </div>
    </div>

    
      
    </>
  )
}

export default Navigation