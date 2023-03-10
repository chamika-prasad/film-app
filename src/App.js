import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import HomePage from "./pages/HomePage";
import FilmList from "./pages/FilmList";
import Movie from "./pages/Movie";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/Movie/:Movie_id" element={<Movie />} />

        <Route path="/FilmList" element={<FilmList />} />

        <Route path="/ContactUs" element={<ContactUs />} />

      </Routes>
    </div>
  );
}

export default App;
