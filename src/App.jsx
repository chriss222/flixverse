import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ExplorePage from "./pages/ExplorePage";
import SearchPage from "./pages/SearchPage";
import DetailsPage from "./pages/DetailsPage";
import Layout from "./components/Layout/Layout";
import "./App.css";
import { useEffect } from "react";
import { fetchTrendingData } from "./features/api/api";

export default function App() {
  console.log(import.meta.env);
  useEffect(() => {
    const getTrending = async () => {
      const data = await fetchTrendingData();
      console.log("DATA: ", data);
    };
    getTrending();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":explore" element={<ExplorePage />} />
          <Route path=":explore/:id" element={<DetailsPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
