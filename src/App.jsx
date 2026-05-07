import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Blog from "./pages/Blog";
import CV from "./pages/CV";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProjectDetail from "./pages/ProjectDetail";
import Projects from "./pages/Projects";
import Research from "./pages/Research";
import ResearchDetail from "./pages/ResearchDetail";
import Works from "./pages/Works";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cv" element={<CV />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:id" element={<ProjectDetail />} />
        <Route path="research" element={<Research />} />
        <Route path="research/:id" element={<ResearchDetail />} />
        <Route path="blog" element={<Blog />} />
        <Route path="works" element={<Works />} />
        <Route path="project" element={<Navigate to="/projects" replace />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
