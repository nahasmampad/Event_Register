import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import "./UserDetails.css";
import Navbar from "../../../components/AdminNavbar/AdminNavbar";

function UserDetails() {
  const [userData, setUserdata] = useState([]);

  const getUserData = async () => {
    const response = await axios.post(
      "http://localhost:5000/api/admin/getUserData"
    );

    if (response.data.userData.length > 0) {
      setUserdata(response.data.userData);
      console.log(typeof userData);
    } else {
      console.log("no user");
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="mains">
      <Navbar />
      <div className="container new">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-10 tableData">
            <h5>User Details</h5>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Sl No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((obj, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{obj.name}</td>
                    <td>{obj.email}</td>
                    <td>@mdo</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
