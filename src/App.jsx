import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main";
import { io } from "socket.io-client";
import Login from "./Login";

export const serverRoute = "http://localhost:8080";
// export const serverRoute = "https://da-s.onrender.com";
export const token = localStorage.getItem("token");
export const socket = io(serverRoute);
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/" />
          <Route element={<Login />} path="/login" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
