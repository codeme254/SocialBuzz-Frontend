import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Feed from "./Pages/Feed/Feed";
import Inbox from "./Pages/Inbox/Inbox";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "./Helpers/Context";
import { useState, useEffect, useContext } from "react";

function App() {
  const [socialBuzzUserData, setSocialBuzzUserData] = useState(() => {
    const storedUserData = localStorage.getItem("socialBuzzUserData");
    return storedUserData ? JSON.parse(storedUserData) : null;
  });

  useEffect(() => {
    if (socialBuzzUserData) {
      localStorage.setItem(
        "socialBuzzUserData",
        JSON.stringify(socialBuzzUserData)
      );
    } else {
      localStorage.removeItem("socialBuzzUserData");
    }
  }, [socialBuzzUserData]);

  return (
    <>
      <UserContext.Provider
        value={{ socialBuzzUserData, setSocialBuzzUserData }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/messaging" element={<Inbox />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </UserContext.Provider>
    </>
  );
}

export default App;
