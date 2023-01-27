import React,{useState,useEffect,useContext} from 'react'
import axios from 'axios'
import Context from './Context'
import Nav from './Nav'
import {Taka,Item} from './Components'
const Liked = () => {
	let da = {
		"userid":27,
		"products":[
          {
          	"id":1,
          	"count":1
          },
          
		],
	}
   let context = useContext(Context)
   let id = context.user? context.user.user_id : null
	let url = 'http://127.0.0.1:8000/liked/'
    let list = [0,1,2,3,4]
    let [likedID,setLikedID]= useState()
    let [hover,setHover]=useState(0)
    useEffect(() => {
    	if(id){
    		axios.post(url,{'id':id})
    		 .then((response)=>{
                setLikedID(response.data)
                console.log(likedID)
    		 })
    		 .catch((err)=>{
    		 	console.log(err)
    		 })
    	}
    	else{
    		console.log('unauthorized')
    	}
    }, [])
	return (
		<>
	<div className="liked-page">
	    <Nav colour={"ash"} visible={true} stick={false} ></Nav>

		<div className="items">
					{likedID ? likedID.map((list)=>{
						return(
							  <Item data={list} ></Item>
                              
						)
					}): <h1>hi</h1>
				 }
				</div>		
	</div>
		</>
	)
}

export default Liked