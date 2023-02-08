import {useState,useContext} from 'react'
import Context from './Context'
import axios from 'axios'
 
let Like =({id,liked})=>{
   let context = useContext(Context)
   let userid = context.user? context.user.user_id : null
   let [like,setLike]= useState(liked?true:false)
   let url = 'http://127.0.0.1:8000/like/'
   return(
      <div onClick={()=>{
             if(like){
             setLike(false)
             }
             else{
             axios.post(url,{'userid':userid,'productid':id})
              .then((response)=>{
               console.log(response,'likes')
              })
              .catch((err)=>{
               console.log(err)
              })
               setLike(true)
             }

          }} className="like">
         <img  src={like?"images/liked.svg":"images/like.png"} alt=""/>
      </div>
   )
}

export default Like