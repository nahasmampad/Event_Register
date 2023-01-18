import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../../../components/Layout";
const UserContext = React.createContext();
function Home() {
  const [user, setUser] = useState("");
  const [registretion, setRegistretion] = useState({});

  const getData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/get-user-info-by-id",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      setUser(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const bookingDetails = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/bookingDetails",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      if (response.data.data) {
        setRegistretion(response.data.data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getData();
    bookingDetails();
  }, []);

  return (
    <div>
      <UserContext.Provider value={{ user, registretion }}>
        <Layout />
      </UserContext.Provider>
    </div>
  );
}

export default Home;
export { UserContext };
