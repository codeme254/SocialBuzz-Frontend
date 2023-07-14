import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Feed from "./Pages/Feed/Feed";
import Inbox from "./Pages/Inbox/Inbox";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/messaging" element={<Inbox />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
