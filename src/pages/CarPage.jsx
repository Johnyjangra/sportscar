import React from "react";
import Nav from "../components/Nav";
import LaunchCar from "../components/LaunchCar";
import SecondLnch from "../components/SecondLnch";
import Prealoder from "../components/Prealoder";
import CarSlide from "../components/CarSlide";

const CarPage = () => {
  return (
    <div>
      <Prealoder />
      <Nav />
      <LaunchCar />
      <SecondLnch />
      <CarSlide />
    </div>
  );
};

export default CarPage;
