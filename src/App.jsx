import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import CustomFooter from "./components/CustomFooter";
import Home from "./Pages/Home";
import Create from "./Pages/Create";
import NotFound from "./Pages/NotFound";
import Edit from "./Pages/Edit";

const App = () => {
  const [editId, setEditId] = useState(0);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home setEditId={setEditId} />} />
          <Route path="/create" element={<Create />} />
          {/* Dynamic Page Routing */}
          <Route path="/edit/:id" element={<Edit id={editId} />} />
          {/* No Page Found Routing */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CustomFooter />
      </BrowserRouter>
    </>
  );
};

export default App;
