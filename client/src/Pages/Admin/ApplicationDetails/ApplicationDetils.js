import React, { useEffect, useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import Table from "react-bootstrap/Table";
import axios from "axios";
import "../UserDetails/UserDetails.css";
import Navbar from "../../../components/AdminNavbar/AdminNavbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Applications() {
  const navigate = useNavigate();
  const [applications, setApplications] = useState([]);
  const [allitem, setAllitem] = useState("");
  const [render, setRender] = useState("");
  const location = useLocation()

  //### Status Updations ###///

  const changeStatus = async (id) => {
    const response = await axios.get(
      `http://localhost:5000/api/admin/changeStatus/${id}`
    );
    console.log(response.data.success);
    if (response.data.success) {
      getApplications();
      console.log("Approved");
    }
  };

  const reject = async (idr) => {
    const response = await axios.get(
      `http://localhost:5000/api/admin/reject/${idr}`
    );
    console.log(response.data);
    if (response.data.success) {
      getApplications();
    }
  };

  const bookSlote =(id)=>{
    navigate(`/admin/slote/${id}`)
    
  }

  const viewSlote=()=>{
    navigate('/admin/slote/1')
  }




  //### Status Updations ###///

  const getApplications = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/admin/getApplications"
    );

    if (response.data.applications.length > 0) {
      setApplications(response.data.applications);
      setAllitem(response.data.applications);
    } else {
    }
  };

  //### Filter ###//

  const filter = async (e) => {
    const result = allitem.filter((value) => {
      if (value.status === e) {
        return value.status === e;
      }

      if (e === "All") {
        return value;
      }
    });

    setApplications(result);
  };

  useEffect(() => {
    getApplications();
  }, []);

  return (
    <div className="mains">
      <Navbar />
      <div className="container new">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="mt-5 ms-5 mb-2">
            <DropdownButton id="dropdown-basic-button" title="Filter">
              <Dropdown.Item onClick={() => filter("All")}>All</Dropdown.Item>
              <Dropdown.Item onClick={() => filter("Pending")}>
                Pending
              </Dropdown.Item>
              <Dropdown.Item onClick={() => filter("Approved")}>
                Approved
              </Dropdown.Item>
              <Dropdown.Item onClick={() => filter("Rejected")}>
                Rejected
              </Dropdown.Item>
            </DropdownButton>
          </div>
          <div className="col-10 tableData mt-3">
            <h5>Applications</h5>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Sl No</th>
                  <th>Name</th>
                  <th>Mobile No</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((obj, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{obj.name}</td>
                    <td>{obj.mobNo}</td>
                    <td>{obj.status}</td>
                    <td className="d-flex justify-content-end">
                      {obj.status === "Pending" && (
                        <button
                          onClick={() => changeStatus(obj._id)}
                          className="btn btn-primary me-3"
                        >
                          Approve
                        </button>
                      )}

                      {obj.status === "Approved" && (
                        <button
                          onClick={() => bookSlote(obj._id)}
                          className="btn btn-primary me-3"
                        >
                          Book Slote
                        </button>
                      )}

                      {obj.completed  && (
                        <button
                          onClick={() => viewSlote(obj._id)}
                          className="btn btn-primary me-3"
                        >
                          View Slot
                        </button>
                      )}
                      {obj.status === "Rejected" && (
                        <button
                          onClick={() => changeStatus(obj._id)}
                          className="btn btn-primary me-3"
                        >
                          Approve
                        </button>
                      )}


                      {!obj.completed && <button
                        onClick={() => reject(obj._id)}
                        className="btn btn-danger"
                      >
                        Reject
                      </button>}
                    </td>
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

export default Applications;
