import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Mainlayout } from "./layout/main-layout";
import { nanoid } from "nanoid";
import { main_pager } from "./router/main-router";
import { ShopSingle } from "./pages/Shop-single/shop-single";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          {main_pager.map((item) => (
            <Route
              index={item.path ? false : true}
              key={nanoid()}
              path={item.path}
              element={item.component}
            />
          ))}
          <Route path="/shopSingle/:id" element={<ShopSingle />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
