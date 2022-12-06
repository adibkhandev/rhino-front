import React,{useState} from 'react'
import {Taka} from './Components'
const RunningOut = () => {
	let [active,setActive]=useState(0)
  let [animate,setAnimate]=useState(false)
   let [deduct,setDeduct]=useState(0)
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
          {
          	title:"Solo Leveling Vol. 1",
          	taka:240,
          	heading:"eid sale",
          	runout:"Running out this week",
          	url:"product6.jpg",
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
	console.log(animate)
	return (
		<>
        
		
			<div className="page2">

			
              <div className={animate?"txts anime":"txts"}>
              	<div className="headers">
              		<h1 className={animate?"small anime":"small"}>
              			{products[active].heading}
              		</h1>
              		<h1 className={animate?"big anime":"big"}>
              			{products[active].runout}
              		</h1>
              	</div>
              	<div className="pricers">
              	     <h1 className={animate?"title anime":"title"}>{products[active].title}</h1>
              		<Taka taka={products[active].taka} num={"one"} ></Taka>
              		 <button>
              		 	Shop Now
              		 </button>

              	</div>
              </div>

            
              <div onAnimationEnd={()=>{
                        setAnimate(false)
                        setActive(active+deduct)
                      }}  className={animate?"images anime":"images"}>

                      <img  src={`images/${products[active].url}`} alt=""/>

                       {inactive.map((inac)=>{
                       	return(
                            <img className="inactive-images" src={`images/${inac.url}`} alt=""/>
                       	)
                       })}
                      
              	 
              </div>

            
              <div className="movers">
              	<button onClick={()=>{
                        setAnimate(true)
                        setDeduct(-1)
                      }
                    } >
              		<img id="left" src="images/arrow-icon.png" alt=""/>
              	</button>
              	<button onClick={()=>{
                        setAnimate(true)
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