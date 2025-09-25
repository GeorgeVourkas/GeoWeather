import React from "react";
import Header from "./components/Header";
import BackgroundView from "./components/BackgroundView";
import InformationSection from "./components/InformationSection";
import PopularCities from "./components/PopularCities";
import "./styles/style.css"
export default function App() {
  const [favCities,setFavCities] = React.useState([]);
  return (
  
      <section className="mainSection">
        <Header/>
        <BackgroundView/>
        {/* <InformationSection/> */}
        <PopularCities/>
      </section>
  
  );
}
