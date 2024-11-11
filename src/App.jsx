import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ExplorePage from "./pages/ExplorePage";
import SearchPage from "./pages/SearchPage";
import DetailsPage from "./pages/DetailsPage";
import Layout from "./components/Layout/Layout";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/trending/:explore" element={<ExplorePage />} />
          <Route path="/details/:category/:id" element={<DetailsPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
