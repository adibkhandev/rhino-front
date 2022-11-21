import React from 'react'

const Navigation = () => {
  return (
    <>
    <div className="ashnav">
     <div className="logo">
        <img src="images/rhino-logo-ash.png" alt="" className="logoimage"/>
     </div>
     <div className="textnav-ash">
        <h1 className="nav-but">About</h1>
        <h1 className="nav-but">Categories</h1>
        <h1 className="nav-but">Explore</h1>
      
     </div>
    
     <div className="sidenav">
       <div id="icon-1" className="imgs">
        <img  src="images/account-ash.png" alt="" className="icons"/>
       </div>
       <div className="imgs">
        <img src="images/love-ash.png" alt="" className="icons"/>
       </div>
       <div className="imgs">
         <img src="images/shopping-bag-ash.png" alt="" className="icons"/>
      </div>    
     </div>
    </div>

    
      
    </>
  )
}

export default Navigation