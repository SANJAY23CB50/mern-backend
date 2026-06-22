import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Movies from "./pages/Movies";
import Showtimes from "./pages/Showtimes";
import Booking from "./pages/Booking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Frontend is working!</h1>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/showtimes/:id" element={<Showtimes />} />
        <Route path="/booking/:id" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
