import React,{useEffect} from 'react'
import {Navigate,} from 'react-router-dom'



function AdminProtectedRouts(props) {
   
    
    if(localStorage.getItem('adminToken')){
        return props.children
    }else{
        
        return <Navigate to='/admin/login'/>
    }
  
}

export default AdminProtectedRouts