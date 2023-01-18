import React,{useContext, useState} from "react";
import './Layout.css'
import Animation from '../logoAni.gif'
import {UserContext} from '../Pages/User/Home/Home'
import { Link,useNavigate} from "react-router-dom";


function Layout() {
  const navigate = useNavigate()
  const user = useContext(UserContext)
  const register = user.registretion.registerd


  const logout =()=>{
    localStorage.removeItem("token")
    navigate('/login')

  }

  console.log(user, 'jjj');
 
  

  return (
    <>
      <div className="body bg-success d-flex align-items-center ">
        <div className="container ">
          <div className="row">
            <div className="col-12 d-flex justify-content-spacebetween d-flex align-items-center ">
                <div className="col-md-6 col-sm-12">
                    <h1>Hai {user.user.name} </h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br/> Ratione deleniti odio explicabo quae molestias quasi, <br/> saepe cumque eum perspiciatis repellendus </p>
                    <div className="d-flex me-3">
                         
                         {register ? <Link to='/status'> <button className="btn btn-warning me-3">Status</button></Link> :
                         <Link to='/booking'> <button className="btn btn-warning me-3">Book Now</button></Link>
                         }
                        <button onClick={logout}  className="btn btn-light">Logout</button>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="imageCont">
                    <img src={Animation} alt="" />
                    </div>
                    
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
