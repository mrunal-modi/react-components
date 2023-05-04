import "./App.scss";
import { useCallback, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Header from "./components/sections/header/header";
import Sidebar from "./components/sections/header/sidebar";
import Footer from "./components/sections/footer/footer";

import headerConfig from "./config/header.config";
import PageManager from "./page-manager";

import { NotificationProvider } from "./hooks/NotificationContext";

// 
// @ Note to Self:
// in future we might consider moving this value somewhere else, in some default config or something 
// but let it sit here for the time.
//
const defaultHeaderHeight = 80;

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(!isSidebarOpen);
  }, [isSidebarOpen])

  return (
    <NotificationProvider>
      <BrowserRouter>
        <Header
          {...headerConfig}
          height={headerConfig.height || defaultHeaderHeight}
          toggleSidebar={toggleSidebar}
        />
        <Sidebar
          toggleSidebar={toggleSidebar}
          isOpen={isSidebarOpen}
        />
        <main
          className="main"
          style={{
            paddingTop: headerConfig.position === 'fixed' ? headerConfig.height || defaultHeaderHeight : ""
          }}
        >
          <Routes>
            <Route path="*" element={<PageManager />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </NotificationProvider>
  );
};

export default App;
