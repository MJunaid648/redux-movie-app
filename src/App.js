import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
// import PageNotFound from "./components/page-not-found/PageNotFound.jsx";
import MovieDetail from "./components/movie-detail/MovieDetail.jsx";
import "./App.scss";
const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
export default App;
