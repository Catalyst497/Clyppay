import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/shared/custom/Header";
import {headerHeight} from "@/lib/Constants.js"

function App() {
  return (
    <>
      <Header />
      <main
        style={{
          marginTop: headerHeight,
          minHeight: `calc(100vh - ${headerHeight})`,
        }}
        className={` flex flex-col  pb-8 md:pb-16`}
      >
      <Outlet />
      </main>
    </>
  );
}

export default App;
