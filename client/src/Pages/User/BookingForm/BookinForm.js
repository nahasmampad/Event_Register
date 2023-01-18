import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import "./BookingForm.css";
import axios from "axios";

function BookinForm() {
    const navigate = useNavigate()

    const onBooking = async(value)=>{
        const response = await axios.post(
            "http://localhost:5000/api/user/bookSloat",value,
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
        )

        console.log(response);
        if(response.data.success){
            navigate('/')
        }
    }




  return (
    <>
      <div className="main bg-success">
        <Form layout="vertical " onFinish={onBooking}>
          <div className="container p-5 d-flex align-item-center justify-content-center">
            <div className="row form-rapper">
              <h5 className="title">Book Your Seat</h5>
              <div className="col-md-6 col-sm-12">
                <Form.Item label="Name" name="name">
                  <Input placeholder="Enter your name here"  type="text"/>
                </Form.Item>

                <Form.Item label="Mobile No" name="mobNo" >
                  <Input placeholder="Enter your Mobile No" type="number" />
                </Form.Item>

                <Form.Item label="city" name="city">
                  <Input placeholder="Enter your City here"  type="text"/>
                </Form.Item>
              </div>

              <div className="col-md-6 col-sm-12">

              <Form.Item label="Email" name="email">
                  <Input placeholder="Enter your email here" type="email" />
                </Form.Item>

              <Form.Item label="Address" name="address">
                  <Input placeholder="Enter your Address here" />
                </Form.Item>

              <Form.Item label="Pincode" name="pincode">
                  <Input placeholder="Enter your pincode here" />
                </Form.Item>
              </div>

              <Button className="button" htmlType="submit">
            Signup
          </Button>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
}

export default BookinForm;
