import React from 'react'
import {Form,Input,Button} from 'antd'
import '../../User/Register/Register.css'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

function Login() {

  const navigate = useNavigate()
  const adminVal =async (value)=>{

  const response = await axios.post('http://localhost:5000/api/admin/login', value);
  console.log(response.data);

  if(response.data.success){
    
    alert(response.data.message)
    localStorage.setItem('adminToken', response.data.data)
    navigate('/admin')
    

  }else{
    
    
    alert(response.data.message)
  }
    
    
    

  }
  return (
    <div className='register'>
      <div className='register-form'>
        <h3>Admin Login</h3>
        <Form layout='vertical' onFinish={adminVal}>
         

          <Form.Item label= 'Email' name='email'>
            <Input placeholder='enter your Email here'/>
          </Form.Item>

          <Form.Item label= 'Password' name='password' >
            <Input placeholder='Enter your Password here' type='password'/>
          </Form.Item>

          <Button className='button' htmlType='submit'>Signup</Button>

          

        

         


        </Form>

      </div>
    </div>
  )
}

export default Login