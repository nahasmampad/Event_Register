import React from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from '../../../components/AdminNavbar/AdminNavbar'
import './Adminhome.css'
import AdminAni from './AdminAni.gif.gif'



function Home() {
  const navigate = useNavigate()
  const logout =()=>{
    localStorage.removeItem("adminToken")
    navigate('/admin/login')
  }
  return (
    <div className='raper'>
      <Navbar/>

      <div className="container ">
        <div className="row main">
          <div className="col-md-6 col-sm-12">
            <h1>Welcome You!!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Reprehenderit mollitia omnis illo ab repellat, sint odit ipsam quis.</p>
            <button onClick={logout} className='btn btn-light'>Logout</button>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="imgCont">
              <img src={AdminAni} alt="" />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home