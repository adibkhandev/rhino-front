import React,{useState} from 'react'
import Nav from './Nav'
import {Taka,Item} from './Components'
const Liked = () => {
    let list = [0,1,2,3,4]
    let [hover,setHover]=useState(0)
	return (
		<>
	<div className="liked-page">
	    <Nav colour={"ash"} visible={true} stick={false} ></Nav>

		<div className="items">
					{list.map((list)=>{
						return(
							  <Item></Item>
                              
						)
					})}
				</div>		
	</div>
		</>
	)
}

export default Liked