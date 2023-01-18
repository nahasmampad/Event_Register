import React from "react";
import "./Register.css";
import { Form, Input, Button } from "antd";
import { useHistory, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
import { hideLoading, showLoading } from "../../../redux/alertSlice";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (value) => {
    try {
      dispatch(showLoading())
      const response = await axios.post(
        "http://localhost:5000/api/user/register",
        value
      );
      dispatch(hideLoading())

      if (response.data.success) {
        toast.success(response.data.message);
        alert(response.data.message);
        navigate("/login");
      } else {
        toast.error("somthing went wrong");
        alert("somthing went error");
      }
    } catch (error) {
      dispatch(hideLoading())
      toast.error("somthing went wrong");
    }
  };
  return (
    <div className="register">
      <div className="register-form">
        <h3>Signup</h3>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Name" name="name">
            <Input placeholder="Enter your name here" />
          </Form.Item>

          <Form.Item label="Email" name="email">
            <Input placeholder="enter your Email here" />
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input placeholder="Enter your Password here" type="password" />
          </Form.Item>

          <Button className="button" htmlType="submit">
            Signup
          </Button>

          <Link to="/login" className="mt-3">
            already have an account
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default Register;
