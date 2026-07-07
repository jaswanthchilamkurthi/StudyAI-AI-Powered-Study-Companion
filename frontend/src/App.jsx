import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Summary from "./pages/Summary";
import Flashcards from "./pages/Flashcards";
import Quiz from "./pages/Quiz";
import Planner from "./pages/Planner";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div
          style={{
            flex: 1,
            padding: "20px",
            background: "#f5f7fa",
            minHeight: "100vh",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/flashcards" element={<Flashcards />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/planner" element={<Planner />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </>
  );
}