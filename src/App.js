import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SharedLayout from "./components/SharedLayout";
import Projects from "./components/Projects";
import Profile from "./components/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Projects />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
