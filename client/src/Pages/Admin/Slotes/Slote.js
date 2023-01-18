import React, { useEffect, useState } from "react";
import "./Slote.css";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Slote() {
  const id = useParams();
  const [state, setState] = useState([])
  const [message,setMessage]= useState('')
  let seats;
  const navigate= useNavigate()

  const bookSeat =async (e)=>{
    
    const obj ={
      seatNo:e.target.value,
      id:id
    }
    const response = await axios.post("http://localhost:5000/api/admin/bookSeat", obj)
    console.log(response.data);
    setMessage(response.data.message)
    if(response.data.success){
      getSeat();

      
    }else{
      console.log(response.data);
      alert(response.data.message)
      navigate('/admin/applications')
    }
  }





  const getSeat = async () => {
    const response = await axios.get("http://localhost:5000/api/admin/getSeat")

    
    seats =response.data.seats
    setState(response.data.seats)
    
    
    
  };

  console.log(console.log(typeof state));
  

  useEffect(() => {
    getSeat();
  }, []);



  return (
    <div className="bg-success top">
      <div className="container slote-top">
        <div className="row ">
          <div className="col-md-12">

            { state.map((obj, index) => (
                  
                    obj.disabled ? <button key={index}  disabled value={obj.seatNo} className="btn btn-success m-3">{obj.applicant}</button>:
                    <button key={index} onClick={bookSeat} value={obj.seatNo} className="btn btn-primary m-3">{obj.seatNo}</button>

                  
            
                )) }

          </div>




        

      
          



          
        </div>
      </div>
    </div>
  );
}

export default Slote;
