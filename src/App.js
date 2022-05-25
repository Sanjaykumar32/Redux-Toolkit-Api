import React from "react";
import Headar from "./Headar/Headar";
import "./App.css";
import { ApiGet } from "./Api/ApiGet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ApiGet />
        <Routes>
          <Route path="/" element={<Headar />}></Route>
          {/* <Route path={"/carddetails" + getid} element={<Details />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
