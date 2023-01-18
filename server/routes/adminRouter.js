const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const Register = require("../models/registerMode");
const Seats = require("../models/seatModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/login", async (req, res) => {
  try {
    const password = 123456789;
    const email = "admin@gmail.com";
    console.log(req.body, "log ");

    if (email == req.body.email) {
      if (password == req.body.password) {
        const token = jwt.sign({ id: 123456 }, process.env.JWT_SECRET, {
          expiresIn: "1d",
        });
        res
          .status(200)
          .send({ message: "Login Successfull", success: true, data: token });
      } else {
        console.log(error);
        res
          .status(500)
          .send({ message: "Password Incorrect", success: false, error });
      }
    } else {
      console.log(error);
      res
        .status(500)
        .send({ message: "Not a valid mail", success: false, error });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error Login In", success: false, error });
  }
});

router.post("/getUserData", async (req, res) => {
  try {
    const userData = await User.find({});

    

    return res
      .status(200)
      .send({ message: "user does not exist", success: false, userData });
  } catch (error) {
    res
      .status(500)
      .send({ message: "error getting uder info", success: false, error });
  }
});

router.get("/getApplications", async (req, res) => {
  try {
    const applications = await Register.find({});

    return res.status(200).send({ message: "ok", success: true, applications });
  } catch (error) {
    res
      .status(500)
      .send({ message: "error getting uder info", success: false, error });
  }
});

router.get("/changeStatus/:id", async (req, res) => {
  try {
    const response = await Register.updateOne(
      { _id: req.params.id },
      { $set: { status: "Approved" } }
    );
    return res
      .status(200)
      .send({ message: "approved", success: true, response });
  } catch (error) {
    res
    .status(500)
    .send({ message: "error getting uder info", success: false, error });
  }
});

router.get("/reject/:id", async (req, res) => {
  try {
    console.log(req.params.id);

    const response = await Register.updateOne(
      { _id: req.params.id },
      { $set: { status: "Rejected", completed:false } }
    );
    return res
      .status(200)
      .send({ message: "rejected", success: true, response });
  } catch (error) {
    res
    .status(500)
    .send({ message: "error getting uder info", success: false, error });
  }
});

router.get('/getSeat', async (req,res)=>{
  const seats = await Seats.find({})
  
  res.status(200).send({ message: "Sucess", success: true, seats });
})

router.post('/bookSeat',async (req,res)=>{
  try {

    const ids =req.body.id.id
    console.log(ids,'llll');
    
    const isRegisterd = await Seats.findOne({registerId:ids})
    console.log(isRegisterd);
    
    if(!isRegisterd){
      console.log('!!!!');
      const resgister = await Register.findOne({ _id:ids });
    

    const response = await Seats.updateOne(
      { seatNo: req.body.seatNo },
      { $set: { disabled: true, applicant:resgister.name, registerId:ids } }
    );

    const updateAppli = await Register.updateOne({_id:ids},
      {$set:{status:`your seat is reserved, seat No ${req.body.seatNo} `,completed:true}}
      
      )


    res.status(200).send({ message: "Slote Booked", success: true, response });
    } else{
      console.log('else');
      res.status(200).send({ message: "Allredy Booked", success: false });
    }
    

    
    
  } catch (error) {
    res
    .status(500)
    .send({ message: "error getting uder info", success: false, error });
  }
})



module.exports = router;
