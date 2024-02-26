import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
export const Mainlayout = () => {
  return (
    <div className="h-screen flex justify-between text-5 flex-col">
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};
