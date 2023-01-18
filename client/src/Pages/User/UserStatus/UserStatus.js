import React,{useEffect, useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import './UserStatus.css'

import axios from 'axios';


function UserStatus() {
  const [registretion, setRegistretion] = useState({});
  const navigate = useNavigate()

  //### get data ###///
  const bookingDetails = async () => {
    
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/bookingDetails",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      
        setRegistretion(response.data.data);
        
        

      
    } catch (error) {}
  };

  useEffect(()=>{
    bookingDetails()
  },[])




  return (
    <div className='body'>
        <div className="continer   body ">
          <div className="row">
            <div className="col">
              <div className='statusBox'>
                <h3>Hai {registretion.name}</h3>
                <p>Your Registretion Is: <br /> <span>"{registretion.status}"</span></p>

                <Link to='/'><button className="btn btn-primary btns"> Home</button></Link>

                

              </div>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default UserStatus