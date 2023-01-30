import React,{createContext,useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import axios from 'axios'
export let Context = createContext()

export let AuthProvider = ({children}) =>{
	let [search,setSearch] = useState(null)
    let [category,setCategory] = useState(null)
    let [offer,setOffer]=useState(null)
    let [result,setResult] = useState(null)
    let [loading,setLoading] = useState(true)
    let navigate = useNavigate()
    let localStorageRefresh = localStorage.getItem('refreshtoken')
    let localStorageAccess = localStorage.getItem('usertoken')
    let [refresh,setRefresh] = useState(JSON.parse(localStorageRefresh)|| null)
	const [token, setToken] = useState(JSON.parse(localStorageAccess) || null)
	//contains user id
	let [data,setData]= useState(null)
	// console.log(data.user_id)
	//
	
	let lifespan = 1000 * 60 * 4
	let url = 'http://127.0.0.1:8000/api/token/refresh/'
	let search_url = 'http://127.0.0.1:8000/search/'
	let search_url_cat = 'http://127.0.0.1:8000/search/cat/'
    console.log(token,'token')
	useEffect(() => {
		let Now = setInterval(()=>{
          if(token!=null){
          axios.post(url,{'refresh':refresh})
		    .then((response)=>{
			 setToken(response.data.access)
			 localStorage.setItem('usertoken',JSON.stringify(token))
			 console.log('hello'+token)

		   })
		   .catch((err)=>{
			 console.log(err)
		   })
		  }
		  else{
		  	console.log('refresh failed')
		  }
		},lifespan)
		return () => {
			clearInterval(Now)
			console.log('cleared')
		};
	}, [token,refresh])
useEffect(() => {
	if(localStorageAccess){
		setToken(JSON.parse(localStorageAccess))
		setRefresh(JSON.parse(localStorageRefresh))
     if(token){
     	let userdata = jwt_decode(token)
     	setData(userdata)
     	console.log(userdata,'data')
     }		
	}
}, [token])
useEffect(() => {
    console.log(result,'result mf')
}, [result])
useEffect(()=>{
	console.log(category,'stats')
},[category])

//search api request

useEffect(() => {
	console.log(search,'keywordddd')
        	setLoading(true)
        if(search){
        	console.log('searchhh')
        	axios.post(search_url,{'searched':search})
        	.then((response)=>{
        		setResult(response.data)
        		setLoading(false)
        		setCategory(null)
        		setOffer(null)
        	})
        	.catch((err)=>{
        		console.log(err)
        	})
        }
        if(category){
        	console.log('success send')
             axios.post(search_url_cat,{'category':category})
             .then((response)=>{
             	setResult(response.data)
             	setLoading(false)
             	setSearch(null)
             	setOffer(null)
             })
             .catch((err)=>{
             	console.log(err)
             })
        }
}, [search,category,offer])



    console.log(token,'t')
	let usersetter=(token)=>{
		let userdata = jwt_decode(token.access)
		console.log(userdata)
		if(userdata){
		setData(userdata)
		   if(data){
		     console.log(data.user_id)
		   }
	    }
           
	}


	let tokensetter=(sentToken)=>{

		if(sentToken){
		setToken(sentToken.access)
		setRefresh(sentToken.refresh)
		localStorage.setItem('usertoken',JSON.stringify(token))
		localStorage.setItem('refreshtoken',JSON.stringify(refresh))
        navigate('/')
       }
	}

    let searcher =(search_keyword)=>{
    	if(search_keyword){

    	}
    }

	return(
        <Context.Provider value={{'loading':loading,'setloading':setLoading ,'function':tokensetter,'token':token,'user':data,'usersetter':usersetter,'setsearch':setSearch,'search_result':result,'set_category':setCategory,'setresult':setResult}} >
        	{children}
        </Context.Provider>
	)
}

export default Context