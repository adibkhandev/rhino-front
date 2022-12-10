import React,{useState,useEffect} from 'react'
import {Taka} from './Components'
const RunningOut = () => {
	let [active,setActive]=useState(0)
  let [animate,setAnimate]=useState(0)
   let [deduct,setDeduct]=useState(0)
   useEffect(()=>{
       console.log(active)
       console.log(products.length )
   },[active])

	let products = [
          {
          	title:"Solo Leveling Vol. 1",
          	taka:240,
          	heading:"eid sale",
          	runout:"Running out this week",
          	url:"product-2.jpg",
          },
          {
          	title:"Solo Leveling Vol. 1",
          	taka:240,
          	heading:"Big sale",
          	runout:"Running out this week",
          	url:"product1.jpg",
          },
          {
          	title:"Solo Leveling Vol. 1",
          	taka:240,
          	heading:"eid sale",
          	runout:"Running out this week",
          	url:"product6.jpg",
          },
        
	]


	let inactive = products.filter((inactiveProducts,index)=>{
		return index!==active
	})
	// console.log(animate)
	return (
		<>
        
		
			<div className="page2">

			
              <div className={animate===1?"txts ghost-text":animate===2?"txts ghost-text human-text":"txts"}>
              	<div className="headers">
              		<h1 className={"small"}>
              			{products[active].heading}
              		</h1>
              		<h1 className={"big"}>
              			{products[active].runout}
              		</h1>
              	</div>
              	<div className="pricers">
              	     <h1 className={"title"}>{products[active].title}</h1>
              		<Taka taka={products[active].taka} num={"one"} ></Taka>
              		 <button>
              		 	Shop Now
              		 </button>

              	</div>
              </div>

            
              <div      onAnimationEnd={()=>{
                           if(animate===1 ){
                            
                              if(active>0 ){
                                if(active+1<products.length){
                                 setActive(active+deduct)
                                 setAnimate(2)
                               }
                                 else{
                                  setActive(0)
                                  setAnimate(2)
                                 }

                              }
                              if(active===0){
                                if(deduct>0){
                                 setActive(active+deduct)
                                 setAnimate(2)
                                }
                                else{
                                  setActive(0)
                                  setAnimate(2)

                                }
                              }
                              

                            
                              
          
                              
                           
                            
                             
                         }
                         if(animate===2){
                          setAnimate(0)

                         }
                       
                       

              }}
                        className={animate===1?"images ghost":animate===2?"images ghost human":"images"}>

                      <img  src={`images/${products[active].url}`} alt=""/>

                       {inactive.map((inac)=>{
                       	return(
                            <img className="inactive-images" src={`images/${inac.url}`} alt=""/>
                       	)
                       })}
                      
              	 
              </div>

            
              <div className="movers">
              	<button onClick={()=>{
                        setAnimate(1)
                        setDeduct(-1)
                      }
                    } >
              		<img id="left" src="images/arrow-icon.png" alt=""/>
              	</button>
              	<button onClick={()=>{
                        setAnimate(1)
                        setDeduct(1)
                      }
                    } >
              		<img id="right" src="images/arrow-icon.png" alt=""/>
              	</button>

              </div>
           


           </div>
           
		
           
           </>

	


	)
}

export default RunningOut