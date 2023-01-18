import React,{useEffect} from 'react'
import {Navigate,} from 'react-router-dom'



function protectedRouts(props) {
   
    
    
    

    if(localStorage.getItem('token')){
        return props.children
    }else{
        
        return <Navigate to='/login'/>
    }
  
}

export default protectedRouts