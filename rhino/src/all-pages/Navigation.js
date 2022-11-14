import React from 'react'

const Navigation = () => {
  return (
    <>
    <div className="full-nav">
      <div className="nav-cont">
      <Logo></Logo>
      <Textnav></Textnav>
      <Search></Search>
      
      
      
     </div>
     <Sidenav></Sidenav>

    </div>
        
    </>
  )
}

let Search =()=>{
  
  return(
    <>
    <div className="search-bar">
    <button className="search-btn">
      <img src="images/search-ash.png" alt="" className="search-img"/>
    </button>
    <input type="text" placeholder="Search products"/>  
    </div>
    
    </>
  )
}


let Logo =()=>{
  
  return(
    <div className="logo">
     <img src="images/rhino-logo.png" alt="" className="logo-image"/>
    </div>
  )
}
let Sidenav =()=>{

  return(
    <div  className="sidenavbar">
      <img src="images/account-white.png" alt="" className="nav-image"/>
      <div className="redsapce"></div>
      <img src="images/shopping-bag-white.png" alt="" className="nav-image"/>
      <div className="redsapce"></div>
      <img src="images/love-white.png" alt="" className="nav-image"/>
      <div className="redsapce"></div>
    </div>
  )
}

let Textnav =()=>{
  

  return(
     <>
         <div className="textnav">
           <h1 className="nav-btn">about</h1>
           <h1 className="nav-btn">categories</h1>
           <h1 className="nav-btn">explore</h1>
         </div>
     </>
  )
}

export default Navigation