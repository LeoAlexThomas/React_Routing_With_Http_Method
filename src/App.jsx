import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import CustomFooter from "./components/CustomFooter";
import Home from "./Pages/Home";
import Create from "./Pages/Create";
import NotFound from "./Pages/NotFound";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          {/* No Page Found Routing */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CustomFooter />
      </BrowserRouter>
    </div>
  );
};

export default App;
