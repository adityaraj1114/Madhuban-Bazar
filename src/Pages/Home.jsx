import React from "react";
import { CustomNavbar } from "../Components/CustomNavbar";
import { Carousal } from "../Components/Carousal";

export const Home = () => {
  return (
    <div className="">
      <CustomNavbar />

      <Carousal />

      <div className="container">
        <h1 className="text-center mt-3">Welcome</h1>
        <p className="lead text-center">To Your own Mart!</p>
      </div>
    </div>
  );
};
