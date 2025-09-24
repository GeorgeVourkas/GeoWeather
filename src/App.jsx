import { useState } from "react";
import "./style.css"
import Header from "./components/Header";
import BackgroundView from "./components/BackgroundView";
import InformationSection from "./components/InformationSection";
import PopularCities from "./components/PopularCities";


export default function App() {
  return (
    <>
      <section className="mainSection">
        <Header/>
        <BackgroundView/>
        {/* <InformationSection/> */}
        <PopularCities/>
      </section>
    </>
  );
}
