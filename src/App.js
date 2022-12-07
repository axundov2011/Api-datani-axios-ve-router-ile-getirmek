import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RightList from "./components/RightList";
import RightDetail from "./components/RightDetail";
function App() {
  return (
    <BrowserRouter>
      <div className="main_wrapper">
        <header></header>
        <div className="ui raised very padded text container segment">
          <Routes>
            <Route path="/" element={<RightList />} />
            <Route path="/posts/:id" element={<RightDetail />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
