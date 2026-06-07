import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import HomePage from "./pages/HomePage";
import NotesPage from "./pages/NotesPage";
import ArticlePage from "./pages/ArticlePage";
import WorkPage from "./pages/WorkPage";
import PrinciplesPage from "./pages/PrinciplesPage";
import AboutPage from "./pages/AboutPage";
import "../styles/App.css";

export default function App() {
  return (
    <HashRouter>
      <div className="app">
        <Nav />
        <main className="main-content">
          <Routes>
            <Route path="/"               element={<HomePage />} />
            <Route path="/notes"          element={<NotesPage />} />
            <Route path="/notes/:slug"    element={<ArticlePage />} />
            <Route path="/work"           element={<WorkPage />} />
            <Route path="/principles"     element={<PrinciplesPage />} />
            <Route path="/about"          element={<AboutPage />} />
            <Route path="*"              element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
