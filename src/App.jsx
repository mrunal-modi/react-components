import { useState, useCallback } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./view/LandingPage/LandingPage"
import PreviewPage from "./view/PreviewPage/PreviewPage"
import PublishedViewPage from "./view/PublishedViewPage/PublishedViewPage";

const App = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(!isSidebarOpen);
  }, [isSidebarOpen]);

  return (
    <div className="app">
        <main
          className="main"
        >
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/edit" element={<PreviewPage />} />
            <Route path="*" element={<PublishedViewPage />} />
          </Routes>
        </main>
    </div>
  );
};

export default App;
