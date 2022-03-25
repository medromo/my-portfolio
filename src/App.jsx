import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "@routes/HomePage/HomePage";


import "@styles/global.scss";

function App() {
  return (
      <BrowserRouter>
        {/* <Layout> */}
          <Routes>
            <Route exact path="/" element={<HomePage />} />
          </Routes>
        {/* </Layout> */}
      </BrowserRouter>
  );
}

export { App };
