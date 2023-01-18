import React from 'react'
import '../Register/Register.css'
import {Form,Input,Button} from 'antd'
import { useNavigate ,Link} from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import toast from 'react-hot-toast'
import { hideLoading, showLoading } from '../../../redux/alertSlice';

function Login() {

  const dispatch = useDispatch()


  const navigate = useNavigate()
  const onFinish =async (value) =>{
    try {
      dispatch(showLoading())
      const response = await axios.post('http://localhost:5000/api/user/login', value);
      dispatch(hideLoading())
      
      if(response.data.success){
        toast.success(response.data.message)
        alert(response.data.message)
        localStorage.setItem('token', response.data.data)
        navigate('/')
        

      }else{
        dispatch(hideLoading())
        toast.error('somthing went wrong')
        alert('somthing went error')
      }



    } catch (error) {
      toast.error('somthing went wrong')
    }
  }
  return (
    <div className='register'>
      <div className='register-form'>
        <h3>Login</h3>
        <Form layout='vertical' onFinish={onFinish}>
         

          <Form.Item label= 'Email' name='email'>
            <Input placeholder='enter your Email here'/>
          </Form.Item>

          <Form.Item label= 'Password' name='password' >
            <Input placeholder='Enter your Password here' type='password'/>
          </Form.Item>

          <Button className='button' htmlType='submit'>Signup</Button>

          <Link to='/register' className='mt-3'>Click her to signin</Link>

        

         


        </Form>

      </div>
    </div>
  )
}

export default Login