import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import PageNotFound from "./components/page-not-found/PageNotFound";
import Footer from "./components/footer/Footer";
import MovieDetail from "./components/movie-detail/MovieDetail";

const App = () => {
  return (
    <div className="app">
      <Header />
      {}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
          <Route path="/page-not-found" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/page-not-found" replace />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
