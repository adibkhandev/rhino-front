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
    let [board,setBoard]=useState(null)
    let [user,setUser]=useState(null)
    let navigate = useNavigate()
    let localStorageRefresh = localStorage.getItem('refreshtoken')
    let localStorageAccess = localStorage.getItem('usertoken')
    let [refresh,setRefresh] = useState(JSON.parse(localStorageRefresh)|| null)
	const [token, setToken] = useState(JSON.parse(localStorageAccess) || null)
	//contains user id
	let [data,setData]= useState(null)
	//
	// console.log(localStorageAccess,'access')
	// console.log(JSON.parse(localStorage.getItem('refreshtoken')),'refresh')
	let [likedID,setLikedID]= useState()
	// console.log(data.user_id)
	console.log(localStorageAccess,'local')
	// console.log(refresh)
	// console.log(search)
	let lifespan = 1000 * 60 * 4
	let url = 'http://127.0.0.1:8000/api/token/refresh/'
	let liked_url = 'http://127.0.0.1:8000/liked/'
	let user_url = 'http://127.0.0.1:8000/userdata/'
	let search_url = 'http://127.0.0.1:8000/search/'
	let search_url_cat = 'http://127.0.0.1:8000/search/cat/'
    // console.log(token,'token')

    useEffect(() => {
    	// console.log(data,'darttaa')
    	// console.log('liking')
    	if(data){
            // console.log(data,'data')
            // console.log('choddaaaa')
    		axios.post(liked_url,{"id":data.user_id})
    		 .then((response)=>{
    		 	// console.log('chhhhhh')
                setLikedID(response.data.liked)
                // console.log(likedID,'this is it')
                // console.log('chhhhh')
    		 })
    		 .catch((err)=>{
    		 	// console.log(err)
    		 })
    		

    	}
    }, [data])
    useEffect(() => {
    	// console.log('chaaaaaaa')
    	if(data){
             axios.post(user_url,{"id":data.user_id})
    		 .then((response)=>{
    		 	// console.log('chaaaaaaa')
    		 	// console.log(response.data)
                setUser(response.data)
                // console.log(user,'is it')
                // console.log('chaaaa')
    		 })
    		 .catch((err)=>{
    		 	// console.log(err)
    		 })
    		 // console.log('chodaaa')
    		}
    }, [data])

	useEffect(() => {
		let Now = setInterval(()=>{
          if(token!=null){
          axios.post(url,{'refresh':refresh})
		    .then((response)=>{
		     // console.log(response.data.refresh,'reeeeeeeeeeee')
			 setToken(response.data.access)
			 localStorage.setItem('usertoken',JSON.stringify(token))
			 // console.log('hello'+token)

		   })
		   .catch((err)=>{
			 // console.log(err)
		   })
		  }
		  else{
		  	// console.log('refresh failed')
		  }
		},lifespan)
		return () => {
			clearInterval(Now)
			// console.log('cleared')
		};
	}, [token,refresh])
useEffect(() => {
	if(localStorageAccess){
		setToken(JSON.parse(localStorageAccess))
		setRefresh(JSON.parse(localStorageRefresh))
     if(token){
     	let userdata = jwt_decode(token)
     	setData(userdata)
     	// console.log(userdata,'data')
     }		
	}
}, [token])
useEffect(() => {
    // console.log(result,'result mf')
}, [result])
useEffect(()=>{
	// console.log(category,'stats')
},[category])

//search api request

useEffect(() => {
	// console.log(category,'keywordddd')
        setLoading(true)
        setCategory(null)
        setOffer(null)
        setBoard(null)
        setSearch(null)
        // console.log('useEffect')
        // console.log(search,'search hoise')
        if(search){
        	// console.log('searchhh')
        	axios.post(search_url,{'searched':search})
        	.then((response)=>{
        		setResult(response.data)
        		setLoading(false)
        		
        	})
        	.catch((err)=>{
        		// console.log(err)
        	})
        }
        if(category){
        	// console.log('success send')
             axios.post(search_url_cat,{'category':category})
             .then((response)=>{
             	setResult(response.data)
             	setLoading(false)
             
             })
             .catch((err)=>{
             	// console.log(err)
             })
        }
        if(board){
        	setResult(board)
        	setLoading(false)
           
        }
}, [search,category,offer,board])



    // console.log(token,'t')
	let usersetter=(token)=>{
		let userdata = jwt_decode(token.access)
		// console.log(userdata)
		if(userdata){
		setData(userdata)
		   if(data){
		     // console.log(data.user_id)
		   }
	    }
           
	}


	let tokensetter=(sentToken)=>{
        console.log(sentToken,'token')
		if(sentToken){
		setToken(sentToken.access)
		setRefresh(sentToken.refresh)
		localStorage.setItem('usertoken',JSON.stringify(sentToken.access))
		localStorage.setItem('refreshtoken',JSON.stringify(sentToken.refresh))
        console.log(localStorage.getItem('usertoken'),'kk')
        navigate('/')
       }
	}
	let logout=()=>{
		setData(null)
		setUser(null)
		setToken(null)
		setRefresh(null)
        // localStorage.removeItem('refreshtoken')
		// localStorage.removeItem('usertoken')
		navigate('/')
	}

    let searcher =(search_keyword)=>{
    	if(search_keyword){

    	}
    }

	return(
        <Context.Provider value={{'logout':logout,'loading':loading,'setloading':setLoading ,'function':tokensetter,'token':token,'user':data,'usersetter':usersetter,'setsearch':setSearch,'search_result':result,'set_category':setCategory,'setresult':setResult,'board':board,setBoard:setBoard,'setUser':setUser,'userdata':user,'setUserdata':setUser}} >
        	{children}
        </Context.Provider>
	)
}

export default Context