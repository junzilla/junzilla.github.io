// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppBarTop from "./components/AppBarTop";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <Router>
      <AppBarTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/blogs" element={<BlogPage />} />
      </Routes>
    </Router>
  );
}

export default App;
