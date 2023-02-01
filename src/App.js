import React from "react";
import Navigation from "./components/Navigation";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";


const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/Detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
