import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Toaster from "react-hot-toast";
import Login from "./Pages/User/Login/Login";
import Register from "./Pages/User/Register/Register";
import Status from "./Pages/User/UserStatus/UserStatus";
import Home from "./Pages/User/Home/Home";
import BookingForm from "./Pages/User/BookingForm/BookinForm";
import "./index.css";
import { useSelector } from "react-redux";
import ProtectedRouts from "./components/ProtectedRouts";
import AdminProtectedRouts from "./components/AdminProtuctedRout";
import AdminPublicRouter from './components/PublicAdminProtecter'
import PublicRouts from "./components/PublicRouts";
import AdminHome from "./Pages/Admin/Home/Home";
import AdminLogin from "./Pages/Admin/Login/Login";
import UserDetails from './Pages/Admin/UserDetails/UserDetails'
import Applications from './Pages/Admin/ApplicationDetails/ApplicationDetils'
import Slote from './Pages/Admin/Slotes/Slote'

function App() {
  const { loading } = useSelector((state) => state.alerts);

  return (
    <BrowserRouter>
      {loading && (
        <div className="spinner-parent">
          <div class="spinner-border text-primary" role="status"></div>
        </div>
      )}
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRouts>
              <Login />
            </PublicRouts>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRouts>
              {" "}
              <Register />
            </PublicRouts>
          }
        />

        <Route
          path="/booking"
          element={
            <ProtectedRouts>
              <BookingForm />
            </ProtectedRouts>
          }
        />

        <Route
          path="/"
          element={
            <ProtectedRouts>
              <Home />
            </ProtectedRouts>
          }
        />

        <Route
          path="/status"
          element={
            <ProtectedRouts>
              <Status />
            </ProtectedRouts>
          }
        />

        <Route path="/admin" element={ <AdminProtectedRouts><AdminHome /></AdminProtectedRouts>} />

        <Route path="/admin/login" element={<AdminPublicRouter><AdminLogin /></AdminPublicRouter>} />
        <Route path="/admin/usersList" element={<AdminProtectedRouts><UserDetails /></AdminProtectedRouts>} />
        <Route path="/admin/applications" element={<AdminProtectedRouts><Applications /></AdminProtectedRouts>} />
        <Route path="/admin/slote/:id" element={<AdminProtectedRouts><Slote /></AdminProtectedRouts>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
